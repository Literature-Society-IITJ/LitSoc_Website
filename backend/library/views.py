from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from library.models import IssuedBook, Book
from library.serializers import BookIssueSerializer, BookAddSerializer, BookViewSerializer, BookReturnSerializer
from django.contrib.admin.views.decorators import staff_member_required
from home.models import Member
from datetime import datetime
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
        time = datetime.str
    # @staff_member_required
    def post(self, request, format=None):
        print(request.data)
        serializer = BookIssueSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            issued_book_id = request.data.get('book_id_temp')
            user_id = serializer.data.get('roll_number')
            # print(issued_book_id)
            issued_book = Book.objects.filter(book_id = str(issued_book_id))[0]
            issued_by = Member.objects.filter(roll_number = str(user_id))[0]
            # print(issued_book)
            issued = serializer.save()
            return Response({'bookissued': serializer.data, 'msg':'Book issued successfully'}, status=status.HTTP_200_OK)
        return Response("Please check the credentials", status=status.HTTP_400_BAD_REQUEST)
        # return Response({'1': '2'})

class BookView(APIView):

    def get(self, request, format=None):
        
        # __request.GET and request.query_params are same__

        category = str(request.query_params.get('category'))
        name = str(request.query_params.get('name'))
        isbn = str(request.query_params.get('isbn'))
        author = str(request.query_params.get('author'))

        filtered_books = Book.objects.filter(Q(category__icontains = category) 
                            & Q(name__icontains = name) 
                            & Q(isbn__icontains = isbn) 
                            & Q(author__icontains = author)).values()
        
        return Response(filtered_books, status=status.HTTP_200_OK)
        

class BookReturnView(APIView):
    def put(self, request, id, format=None):
        returned_by = IssuedBook.objects.filter(book_id = id)
        serializer = BookReturnSerializer(returned_by, data=request.data)
        if serializer.is_valid():
            serializer.save()
