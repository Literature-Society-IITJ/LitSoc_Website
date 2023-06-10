from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import viewsets
from home.models import Member, EmailVerification
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from home.serializers import MemberRegistrationSerializer, MemberLoginSerializer, MemberProfileViewSerializer
from home.renderers import MemberRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from library.models import IssuedBook, IssueRequest, Book
from django.db.models import Q
from readerSection.models import Content
import time
from .emails import send_otp_via_email


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class MemberVerificationView(APIView):

    def get(self, request, format=None):
        email = request.query_params.get('email')
        request_type = request.query_params.get('request_type')

        if request_type == 'sendOTP':
            temp_member = EmailVerification.objects.create(email = email)
            send_otp_via_email(email)

        elif request_type == 'resendOTP':
            send_otp_via_email(email)

        return Response("OTP sent!", status=status.HTTP_200_OK)
    
    # def post(self, request, format=None):
    #     email = request.data.get('email')
    #     otp = request.data.get('otp')

    #     verify = EmailVerification.objects.filter(email = email).values()[0].otp

    #     if verify == otp:
            

class MemberRegistrationView(APIView):
    renderer_classes = [MemberRenderer]
    
    def post(self, request, format=None):
        print(request.data)
        serializer = MemberRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg':'Registration Success'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class MemberLoginView(APIView):
    renderer_classes = [MemberRenderer]
    
    def post(self, request, format=None):
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
                return Response({'errors':{'non_field_errors':['Email or passowrd is not valid']}}, status=status.HTTP_404_NOT_FOUND)


class MemberProfileView(APIView):
    renderer_classes = [MemberRenderer]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        print('______________________________!1111111111111111111111111111111111111111111111111111111111')
        serializer = MemberProfileViewSerializer(request.user)
        
        book = IssuedBook.objects.filter(Q(member = request.user) & Q(availability = False)).values()
        issue_request = IssueRequest.objects.filter(Q(member = request.user) & Q(approved = False) & Q(moderator = '')).values()
        content = Content.objects.filter(Q(member = request.user) & Q(approval_by_admin = "approved")).values()
        # print('_____________________________________' , len(content))
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
            
        # print(temp_book)
        # print('__________',temp_book)
        book_name = False
        if temp_book:
            book_name = Book.objects.filter(pk = temp_book[0]['book_id']).values()[0]
        # print(temp_book[0])
        
        details = {'member_details': serializer.data, 'book': {'book_name':book_name, 'return_date':return_date}, 'content': temp_content}
        print('_____________________________________')
        print(serializer.data)
        
        time.sleep(5)
        return Response(details, status=status.HTTP_200_OK)


class MemberToModeratorView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        if request.user.is_admin:
            moderators = Member.objects.filter(role = "moderator").values()
            moderators = list(moderators)
            moderators.reverse()
            return Response(list(moderators), status=status.HTTP_200_OK)
        else:
            return Response("You are not authorized to take this action", status=status.HTTP_401_UNAUTHORIZED)

    def post(self, request, format=None):
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
        username = request.user.username
        image = Member.objects.filter(username = username).values()[0].image
        return Response(image)

    def post(self, request, format=None):
        image = request.data.get('image')
        roll_number = request.user.roll_number
        member = Member.objects.filter(roll_number = roll_number)
        member.image = image
        member.save()