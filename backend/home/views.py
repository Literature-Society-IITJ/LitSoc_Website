from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import viewsets
from home.models import Member
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from home.serializers import MemberRegistrationSerializer, MemberLoginSerializer, MemberProfileViewSerializer
from home.renderers import MemberRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from library.models import IssuedBook, IssueRequest
from django.db.models import Q
from readerSection.models import Content


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


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
        serializer = MemberProfileViewSerializer(request.user)
        book = IssuedBook.objects.filter(Q(member = request.user) & Q(availability = False)).values()
        issue_request = IssueRequest.objects.filter(Q(member = request.user) & Q(approved = False) & Q(moderator = '')).values()
        content = Content.objects.filter(Q(member = request.user) & Q(approval_by_admin = "approved")).values()
        upload_request = Content.objects.filter(Q(member = request.user) & Q(approval_by_admin = "pending")).values()

        temp_book = "No book issued"
        temp_content = "No content uploaded"

        if len(book) != 0:
            temp_book = book

        elif len(issue_request) != 0:
            temp_book = issue_request

        if len(content) != 0:
            temp_content = content

        elif len(upload_request) != 0:
            temp_content = upload_request

        details = {'member_details': serializer.data, 'book': temp_book, 'content': temp_content}

        return Response(details, status=status.HTTP_200_OK)


class MemberToModeratorView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        roll_number = request.data.get('roll_number')
        member = Member.objects.filter(roll_number = roll_number).values()

        if len(member) == 0:
            return Response("Please check the credentials and try again", status=status.HTTP_400_BAD_REQUEST)
        else:
            member['role'] = "moderator"
            return Response("Role updated successfully", status=status.HTTP_200_OK)
