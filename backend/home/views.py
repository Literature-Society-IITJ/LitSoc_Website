from django.contrib.auth import authenticate
from django.db.models import Q

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from datetime import datetime, timedelta
import pytz
from home.models import Member, EmailVerification
from home.serializers import MemberRegistrationSerializer, MemberLoginSerializer, MemberProfileViewSerializer
from home.renderers import MemberRenderer

from library.models import IssuedBook, IssueRequest, Book
from readerSection.models import Content

from .emails import send_otp_via_email

import jwt

import os

def get_tokens_for_user(user):
    """
    Generates tokens for user
    """

    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class MemberVerificationView(APIView):

    def get(self, request, format=None):
        """
        GET request for OTP. Generates an OTP
        for the user for the purpose of email
        verification.
        """

        # print('HEEEEEEEEEEEEEEEEEEREEEEEEEEEEEEEEEEEEEEEEEEEE')
        email = request.query_params.get('email')
        request_type = request.query_params.get('request_type')

        if Member.objects.filter(email = email).exists():
            return Response("A user with this email already exists", status=status.HTTP_400_BAD_REQUEST)
        
        if request_type == 'sendOTP':
            exists = EmailVerification.objects.filter(email = email)
            if len(exists)!=0:
                exists = exists[0]
                now = datetime.now()
                now = pytz.utc.localize(now)
                request_time = exists.request_time
                next_request_time = request_time + timedelta(minutes=2)

                if next_request_time<now:
                    exists.delete()
                    temp_member = EmailVerification.objects.create(email = email, request_time = datetime.now())
                    send_otp_via_email(email)
                    return Response("OTP sent! Please check your inbox.", status=status.HTTP_200_OK)
                else:
                    delta = (next_request_time - now).total_seconds()
                    return Response(f"The OTP is already sent to you, wait for {delta} seconds to take this action", status=status.HTTP_403_FORBIDDEN)

            temp_member = EmailVerification.objects.create(email = email, request_time = datetime.now())
            send_otp_via_email(email)
            return Response("OTP sent! Please check your inbox.", status=status.HTTP_200_OK)

        elif request_type == 'resendOTP':
            send_otp_via_email(email)
            return Response("OTP resent successfully!", status=status.HTTP_200_OK)

        elif request_type == 'aborted':
            temp_member = EmailVerification.objects.filter(email = email)[0]
            temp_member.delete()
            return Response(status=status.HTTP_200_OK)


    def post(self, request, format=None):
        """
        POST request for OTP verification.
        Verifies if the OTP entered by the
        user is valid.
        """

        email = request.data.get('email')
        otp = request.data.get('otp')
        temp_member = EmailVerification.objects.filter(email = email)[0]
        verify = EmailVerification.objects.filter(email = email).values()[0]['otp']

        now = datetime.now()
        now = now.strftime("%H:%M:%S")
        now = datetime.strptime(now, "%H:%M:%S")
        request_time = temp_member.request_time
        request_time = request_time.strftime("%H:%M:%S")
        request_time = datetime.strptime(request_time, "%H:%M:%S")
        allowed_time = request_time + timedelta(minutes=2)

        if now>allowed_time:
            return Response("You took too long! The OTP is not valid anymore.", status=status.HTTP_400_BAD_REQUEST)

        if verify == int(otp):
            temp_member.is_verified = True
            temp_member.save()
            return Response("Email successfully verified!", status=status.HTTP_200_OK)

        else:
            return Response("Incorrect OTP", status=status.HTTP_400_BAD_REQUEST)


class MemberRegistrationView(APIView):
    renderer_classes = [MemberRenderer]
    
    def post(self, request, format=None):
        """
        POST request for making an account
        on the website after successfully
        verifying the email.
        """

        # print(request.data)
        serializer = MemberRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            temp_member = EmailVerification.objects.filter(email = request.data.get('email'))[0]
            temp_member.delete()
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg':'Registration Success'}, status=status.HTTP_200_OK)
            # return Response('ALLLLLLLLLLLLLL GOOOOOOOOOOOOOOOD', status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class MemberLoginView(APIView):
    renderer_classes = [MemberRenderer]
    
    def post(self, request, format=None):
        """
        POST request for verifying the login
        details entered by the user and
        generating the access tokens.
        """

        serializer = MemberLoginSerializer(data=request.data)
        # print(request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            member = authenticate(email=email, password=password)

            if member is not None:
                token = get_tokens_for_user(member)
                return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
            
            else:
                return Response({'errors':{'non_field_errors':['Email or password is not valid']}}, status=status.HTTP_404_NOT_FOUND)


class MemberProfileView(APIView):
    renderer_classes = [MemberRenderer]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        """
        GET request for getting the profile
        details of the user to be displayed
        on the profile page.
        """

        serializer = MemberProfileViewSerializer(request.user)
        book = IssuedBook.objects.filter(Q(member = request.user) & Q(availability = False)).values()
        issue_request = IssueRequest.objects.filter(Q(member = request.user) & Q(approved = False) & Q(moderator = '')).values()
        content = Content.objects.filter(Q(member = request.user) & Q(approval_by_admin = "approved")).values()
        upload_request = Content.objects.filter(Q(member = request.user) & Q(approval_by_admin = "pending")).values()

        temp_book = False
        temp_content = False
        return_date = False

        if len(book) != 0:
            book[0]['issue_date'] = str(book[0]['issue_date'])
            book[0]['return_date'] = str(book[0]['return_date'])
            temp_book = book
            return_date = temp_book[0]['return_date']

        elif len(issue_request) != 0:
            temp_book = issue_request

        if len(content) != 0:
            temp_content = list(content)

        elif len(upload_request) != 0:
            temp_content = list(upload_request)

        book_name = False

        if temp_book:
            book_name = Book.objects.filter(pk = temp_book[0]['book_id']).values()[0]
        
        details = {'member_details': serializer.data,
                   'book': {'book_name':book_name, 'return_date':return_date},
                   'content': temp_content}

        # time.sleep(3)
        return Response(details, status=status.HTTP_200_OK)


class MemberToModeratorView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        """
        GET request for displaying the
        list of moderators of the website.
        """

        if request.user.is_admin:
            moderators = Member.objects.filter(role = "moderator").values()
            moderators = list(moderators)
            moderators.reverse()
            return Response(list(moderators), status=status.HTTP_200_OK)
        
        else:
            return Response("You are not authorized to take this action", status=status.HTTP_401_UNAUTHORIZED)

    def post(self, request, format=None):
        """
        POST request to give moderator
        access to a requested user.
        """
        
        if request.user.is_admin:
        # print(request.data)
            roll_number = request.data.get('roll_number')
            member = Member.objects.filter(roll_number = roll_number)

            if len(member) == 0:
                return Response("Please check the credentials and try again", status=status.HTTP_400_BAD_REQUEST)
            
            else:
                member = member[0]
                member.role = "moderator"
                member.save()
                return Response("Role updated successfully", status=status.HTTP_200_OK)
            
        else:
            return Response("You are not authorized to take this action", status=status.HTTP_401_UNAUTHORIZED)


class ModeratorToMemberView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        """
        POST request to remove moderator
        access for an existing moderator.
        """

        if request.user.is_admin:
            roll_number = request.data.get('roll_number')
            moderator = Member.objects.filter(roll_number = roll_number)

            if len(moderator) == 0:
                return Response("Please check the credentials and try again", status=status.HTTP_400_BAD_REQUEST)
            
            else:
                moderator = moderator[0]
                moderator.role = "member"
                moderator.save()
                return Response("Role updated successfully", status=status.HTTP_200_OK)
        else:
            return Response("You are not authorized to take this action", status=status.HTTP_401_UNAUTHORIZED)


class ProfileImageUploadView(APIView):

    def get(self, request, format=None):
        """
        GET request to get the profile
        image of the requested user.
        """

        username = request.user.username
        image = Member.objects.filter(username = username).values()[0]['image']

        return Response(image)

    def post(self, request, format=None):
        """
        POST request to upload/update
        the profile image of the
        requested user.
        """

        image_file = request.FILES.get('myImage')
        access_token = request.POST.get('access_token')
        secret_key = os.getenv('SECRET_KEY')
        decoded_token = jwt.decode(access_token, secret_key, algorithms=['HS256'])
        user_id = decoded_token['user_id']
        member = Member.objects.filter(id = user_id)[0]
        member.image = image_file
        member.save()
        
        return Response("Image updated")


class MemberListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        """
        GET request for displaying
        the list of all members.
        """
        members = Member.objects.all().values()

        if request.user.is_admin:
            return Response(list(members), status=status.HTTP_200_OK)
        
        else:
            return Response("You are not authorized to take this action.", status=status.HTTP_401_UNAUTHORIZED)

class ReadBooksView(APIView):

    def get(self, request, format=None):
        """
        GET request for getting a list
        of all the books issued till
        date by the requested user.
        """

        read_books = IssuedBook.objects.filter(Q(member = request.user) & Q(availability = True))
        read_books = list(read_books.values())
        books = []
        for i in read_books:
            x = {}
            book_info = Book.objects.filter(pk = i['book_id']).values()[0]
            x['book'] = book_info['name']
            x['author'] = book_info['author']

            if x not in books:
                books.append(x)

        return Response(books, status=status.HTTP_200_OK)
    
    

class UsernameChangeView(APIView):

    def post(self, request, format=None):
        """
        POST request to upload/update
        the profile image of the
        requested user.
        """
        # code to change username of the memeber and save it in the database if the username is not already taken
        
        username = request.data.get('username')
        member = Member.objects.filter(username = username)
        
        if len(member) != 0:
            return Response("Username already taken", status=status.HTTP_400_BAD_REQUEST)
        
        else:
            request.user.username = username
            request.user.save()
            return Response("Username updated", status=status.HTTP_200_OK)
