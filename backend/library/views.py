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
from home.serializers import MemberProfileViewSerializer, FullMemSz

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
    
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        print('______________________________________' + str(request) + '___________________________________')
        print(request.user)
        
        is_valid = "yes"

        if len(IssueRequest.objects.filter(Q(member = request.user) & Q(approved = False) & Q(moderator = ''))) != 0:
            is_valid = "requested"

        elif len(IssuedBook.objects.filter(Q(member = request.user) & Q(availability = False))) != 0:
            is_valid = "issued"
            
        print(is_valid)

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
        
        filtered_books = list(filtered_book_objects.values())

        # # print('__________________________________________________________________________________________________')
        # # print(filtered_books[1])
        # # print('_______________________________________________________________________________________')

        for i in range(len(filtered_book_objects)):
            if len(IssuedBook.objects.filter(Q(book = filtered_book_objects[i]) & Q(availability = False))) == 0:
                filtered_books[i]['date'] = str(datetime.today()+timedelta(days=15))
                filtered_books[i]['availability'] = True
                # print(filtered_books[i])
                # print('1111')
                # print('1111')
                
                filtered_books[i]["date"] = str(datetime.today()+timedelta(days=15))
                filtered_books[i]["availability"] = True
                # print(filtered_books[i]['availability'])
            else:
                temp = IssuedBook.objects.filter(Q(book = filtered_book_objects[i]))
                
                if len(temp) == 0:
                    filtered_books[i]['date'] = str(datetime.today()+timedelta(days=15))
                    filtered_books[i]['availability'] = True
                    # print('2222')
                
                else:
                    # print('3333')
                    filtered_books[i]['date'] = str(IssuedBook.objects.filter(Q(book = filtered_book_objects[i]) & Q(availability = False)).values()[0]['return_date'])
                    filtered_books[i]['availability'] = False
                    
                # print(IssuedBook.objects.filter(Q(book = filtered_book_objects[i]) & Q(availability = False)).values())
        # filtered_books[0]['hello'] = 'hi'
        # print(filtered_books)

        # print(filtered_books[0])
        return Response(filtered_books, status=status.HTTP_200_OK)
        

class BookReturnView(APIView):
    
    # get a list of all the issued books i.e. approved requests
    def get(self, request, format=None):
        issued_books = IssuedBook.objects.filter(availability = False).values()
        
        for book in issued_books:
            member_info_all = Member.objects.filter(id = book['member_id']).values()[0]
            member_info = {}
            member_info['name'] = f"{member_info_all['first_name']} {member_info_all['last_name']}"
            member_info['roll_number'] = member_info_all['roll_number']
            
            book_info = Book.objects.filter(id = book['book_id']).values()[0]
            # print(member_info)
            # print(book_info)
            book['member_info'] = member_info
            book['book_info'] = book_info
        issued_books[0]['issue_date'] = str(issued_books[0]['issue_date'])
        issued_books[0]['return_date'] = str(issued_books[0]['return_date'])
        print(issued_books)
        return Response(issued_books, status=status.HTTP_200_OK)
    

    # change availability of a book when it is returned
    def post(self, request, format=None):
        print(1)
        # serializer = BookReturnSerializer(data=request.data)
        # if serializer.is_valid():
        if True:
            print(request.data)
            book = Book.objects.filter(book_id = request.data.get('book_id'))[0]
            print(book)
            print("00000000000000000000000000000000000000000000000")
            qset = IssuedBook.objects.filter(Q(book = book) & Q(availability = False))
            print("99999999999999999999999999999999999999999999999")

            if len(qset) == 0:
                return Response("Check the entered credentials and try again", status=status.HTTP_400_BAD_REQUEST)
            else:
                Issued_book = qset[0]
                Issued_book.availability = True
                # book.returned_on = datetime.today()
                # book.returned_to = str(request.user.get('first_name')) + str(request.user.get('last_name'))
                Issued_book.save()
                print(Issued_book)
                return Response("Details updated successfully", status=status.HTTP_200_OK)
        return Response("Check the entered credentials and try again", status=status.HTTP_400_BAD_REQUEST)
    

class BookIssueApprovalView(APIView):

    # permission_classes = [IsAuthenticated]

    # mods see the pending issue requests from here
    def get(self, request, format=None):
        # print('___________________________',request.user.is_admin)
        # sz = FullMemSz(request.user)
        # print(sz.is_valid())
        # print(sz.errors)
        
        if request.user.role not in ['moderator', 'admin'] and not request.user.is_admin:
            print('eeeeeeeeeeeeeeeeeeeeeeeee')
            return Response("Check the entered credentials and try again", status=status.HTTP_400_BAD_REQUEST)
        
        member = Member.objects.filter(roll_number__icontains = str(request.query_params.get('roll_number')))
        # print(member)
        issueRequests = []
        for i in member:
            issuerequest = IssueRequest.objects.filter(Q(member = i)
                                                    & Q(approved = False)
                                                    & Q(moderator = '')).values()
            if len(issuerequest)!=0:
                for j in issuerequest:
                    issueRequests.append(j)

        # issueRequests = IssueRequest.objects.filter(Q(approved = False) & Q(moderator = '')).values()
        # print(issueRequests)
        for req in issueRequests:
            member_info_all = Member.objects.filter(id = req['member_id']).values()[0]
            member_info = {}
            member_info['name'] = f"{member_info_all['first_name']} {member_info_all['last_name']}"
            member_info['roll_number'] = member_info_all['roll_number']
            
            book_info = Book.objects.filter(id = req['book_id']).values()[0]
            # print(member_info)
            # print(book_info)
            req['member_info'] = member_info
            req['book_info'] = book_info
            req['return_date'] = str(datetime.today()+timedelta(days=15))
            
        return Response(list(issueRequests), status=status.HTTP_200_OK)
    
    
    # mods approve any particular request from here
    def post(self, request, format=None):
        
        # print(request.user)
        if request.user.role not in ['moderator', 'admin'] and not request.user.is_admin:
            print(111111111)
            return Response("Check the entered credentials and try again", status=status.HTTP_400_BAD_REQUEST)
        
        member = Member.objects.filter(roll_number = request.data.get('roll_number'))[0]
        issueRequest = IssueRequest.objects.filter(Q(member = member) & Q(approved = False) & Q(moderator = ''))

        if len(issueRequest) == 0:
            return Response("Check the entered credentials and try again", status=status.HTTP_400_BAD_REQUEST)
            
        elif request.data.get('status') == "approved":
            issueRequest = issueRequest[0]
            issueRequest.approved = True
            issueRequest.moderator = request.user.first_name
            issuedBook = IssuedBook.objects.create(book = issueRequest.book, 
                                                   member = member, 
                                                   return_date = datetime.today() + timedelta(days = 15))
            issuedBook.save()
            issueRequest.save()

        elif request.data.get('status') == "rejected":
            issueRequest = issueRequest[0]
            issueRequest.moderator = request.user.first_name
            issueRequest.save()
            
        return Response({'bookissued': issueRequest.book.name, 'msg':'Book issued successfully'}, status=status.HTTP_200_OK)
    
# class IssuedBookSearchView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request, format=None):
#         book = Book.objects.filter(book_id__icontains = str(request.query_params.get('book_id')))
#         issuedBooks = []
#         for i in book:
#             issuedBooks.append(IssuedBook.objects.filter(Q(book = book)
#                                                     & Q(availability = False)).values())
#         return Response(issuedBooks, status=status.HTTP_200_OK)