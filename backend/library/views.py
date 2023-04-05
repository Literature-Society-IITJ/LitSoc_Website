from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from library.models import IssuedBook, Book
from library.serializers import BookIssueSerializer, BookAddSerializer
from django.contrib.admin.views.decorators import staff_member_required
from home.models import Member

# Create your views here.

class BookAddView(APIView):
    # @staff_member_required
    def post(self, request, format=None):
        serializer = BookAddSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            add = serializer.save()
            return Response({'bookadded': serializer.data, 'msg' : 'Book added successfully'})
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class BookIssueView(APIView):
    # @staff_member_required
    def post(self, request, format=None):
        print(request.data)
        serializer = BookIssueSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            print(serializer.data)
            issued_book_id = request.data.get('book_id_temp')
            user_id = serializer.data.get('roll_number')
            # print(issued_book_id)
            issued_book = Book.objects.filter(book_id = str(issued_book_id))[0]
            issued_by = Member.objects.filter(roll_number = str(user_id))[0]
            # print(issued_book)
            issued = serializer.save()
            return Response({'bookissued': serializer.data, 'msg':'Book issued successfully'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # return Response({'1': '2'})