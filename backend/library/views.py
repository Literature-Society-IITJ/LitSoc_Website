from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from library.models import IssuedBook, Book, IssueRequest
from library.serializers import BookIssueSerializer, BookAddSerializer, BookReturnSerializer, BookIssueRequestSerializer
from django.contrib.admin.views.decorators import staff_member_required
from home.models import Member
from datetime import datetime, timedelta
from django.db.models import Q

# Create your views here.

class BookAddView(APIView):
    # @staff_member_required
    def post(self, request, format=None):
        serializer = BookAddSerializer(data=request.data)
        if serializer.is_valid():
            add = serializer.save()
            return Response({'bookadded': serializer.data, 'msg' : 'Book added successfully'}, status=status.HTTP_200_OK)
        return Response("Please check the credentials", status= status.HTTP_400_BAD_REQUEST)


class BookIssueView(APIView):

    def get(self, request, format=None):
        roll_number = request.user.get('roll_number')

        is_valid = False

        if len(IssueRequest.objects.filter(roll_number = roll_number, approved = False, moderator = None)) != 0:
            is_valid = "Requested"

        elif len(IssuedBook.objects.filter(roll_number = roll_number, availability = False)) != 0:
            is_valid = "Issued"

        return Response(is_valid, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        member = request.user
        book_ = Book.objects.filter(book_id = request.data.get('book_id'))

        if len(book_) == 0:
            return Response("Please check the credentials", status=status.HTTP_400_BAD_REQUEST)

        book = book_[0]
        issue_request = IssueRequest.objects.create(book=book, member=member)
        issue_request.save()
        return Response("Details added succesfully", status=status.HTTP_200_OK)


class BookSearchView(APIView):

    def get(self, request, format=None):
        
        # __request.GET and request.query_params are same__

        category = str(request.query_params.get('category'))
        name = str(request.query_params.get('name'))
        isbn = str(request.query_params.get('isbn'))
        author = str(request.query_params.get('author'))

        filtered_book_objects = Book.objects.filter(Q(category__icontains = category) 
                            & Q(name__icontains = name) 
                            & Q(isbn__icontains = isbn) 
                            & Q(author__icontains = author))
        
        filtered_books = filtered_book_objects.values()

        # print('__________________________________________________________________________________________________')
        print(filtered_book_objects[1])

        for i in range(len(filtered_book_objects)):
            # print(filtered_book_objects[i].issuedbook_set.filter(availability = True))
            # if len(filtered_book_objects[i].issuedbook_set.all().filter(availability = True)) == 0:
            #     filtered_books[i]['time'] = str(datetime.today()+timedelta(days=15))


            if len(IssuedBook.objects.filter(Q(book = filtered_book_objects[i]) & Q(availability = True))) != 0:
                filtered_books[i]['date'] = str(datetime.today()+timedelta(days=15))
                filtered_books[i]['availability'] = True

            else:
                filtered_books[i]['date'] = str(IssuedBook.objects.filter(Q(book = filtered_book_objects[i]) & Q(availability = False)).values()['return_date'])
                filtered_books[i]['availability'] = False

        # def get(self, request, format=None):
        #     return datetime.today() + timedelta(days=15)
        return Response(filtered_books, status=status.HTTP_200_OK)
        

class BookReturnView(APIView):
    
    # get a list of all the issued books i.e. approved requests
    def get(self, request, format=None):
        approved = IssueRequest.objects.filter(approved = True).values()
        return Response(approved, status=status.HTTP_200_OK)
    

    # change availability of a book when it is returned
    def post(self, request, format=None):
        serializer = BookReturnSerializer(data=request.data)
        if serializer.is_valid():
            book = Book.objects.filter(book_id = serializer.data.get('book_id'))
            qset = IssuedBook.objects.filter(book = book, availability = False)

            if len(qset) == 0:
                return Response("Check the entered credentials and try again", status=status.HTTP_400_BAD_REQUEST)
            
            else:
                book = qset[0]
                book.availability = True
                book.returned_on = datetime.today()
                book.returned_to = str(request.user.get('first_name')) + str(request.user.get('last_name'))
                book.save()
                return Response("Details updated successfully", status=status.HTTP_200_OK)
                
        return Response("Check the entered credentials and try again", status=status.HTTP_400_BAD_REQUEST)
    

class BookIssueApprovalView(APIView):

    permission_classes = [IsAuthenticated]

    # mods see the pending issue requests from here
    def get(self, request, format=None):
        books = IssueRequest.objects.filter(approved = False).values()
        return Response(books, status=status.HTTP_200_OK)
    
    # mods approve any particular request from here
    def post(self, request, format=None):
        serializer = BookIssueSerializer(data=request.data)

        book = IssueRequest.objects.filter(book_id = serializer.data.get('book_id')).values()

        if len(book) == 0:
            return Response("Check the entered credentials and try again", status=status.HTTP_400_BAD_REQUEST)
            
        else:
            book = book[0]
            book.approved = True
            book.save()

        print(request.data)
        user = request.user
        if serializer.is_valid():
            print(serializer.data)
            issued_book_id = request.data.get('book_id_temp')
            user_id = request.user.get('roll_number')
            # print(issued_book_id)
            issued_book = Book.objects.filter(book_id = str(issued_book_id))[0]
            issued_by = Member.objects.filter(roll_number = str(user_id))[0]
            # print(issued_book)
            issued = serializer.save()
            return Response({'bookissued': serializer.data, 'msg':'Book issued successfully'}, status=status.HTTP_200_OK)
        return Response("Please check the credentials", status=status.HTTP_400_BAD_REQUEST)
        # return Response({'1': '2'})

