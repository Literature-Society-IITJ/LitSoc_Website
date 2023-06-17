from django.db.models import Q

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

import os

import jwt

from readerSection.models import Content

from home.models import Member


class ContentUploadView(APIView):

    def post(self, request, format=None):
        """
        POST request for making an
        upload request from the user end.
        """

        print('______________________________________________________________________________')
        title = request.POST.get('title')
        category = request.POST.get('category')
        content = request.POST.get('content')
        
        background_image = request.FILES.get('background_image')
        access_token = request.POST.get('access_token')
        
        secret_key = os.getenv('SECRET_KEY')
        decoded_token = jwt.decode(access_token, secret_key, algorithms=['HS256'])
        user_id = decoded_token['user_id']
        member = Member.objects.filter(id = user_id)[0]

        existing_titles = Content.objects.filter(Q(member = member)
                                                 & Q(category = category)
                                                 & Q(title = title)).values()
        
        if len(existing_titles) != 0:
            return Response("You cannot have two entries with the same title under the same category", status=status.HTTP_406_NOT_ACCEPTABLE)
        
        new = Content.objects.create(title = title, member = member, category = category, content = content, background = background_image)

        return Response("Entry successful!", status=status.HTTP_200_OK)


class ContentReadView(APIView):

    def get(self, request, format=None):
        """
        GET request to display the
        approved content of reader
        section for the requested
        category.
        """

        category = request.query_params.get('category')
        content = Content.objects.filter(Q(category = category) & Q(approval_by_admin = "approved")).values()

        for c in list(content):
            member = Member.objects.filter(id = c['member_id']).values()[0]
            c['member_name'] = f"{member['username']}"

        return Response(list(content), status=status.HTTP_200_OK)


class ContentApprovalView(APIView):

    def get(self, request, format=None):
        if request.user.is_admin:
            upload_requests = Content.objects.filter(approval_by_admin="pending").values()
            
        elif request.user.role == "moderator":
            upload_requests = Content.objects.filter(Q(approval_by_moderator = "pending")
                                                     &Q(approval_by_admin="pending")).values()

    
        return Response(list(upload_requests), status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        """
        POST request for admin/moderator
        approval for reader section content.
        """
        
        print('_______________________________________________________________')

        member = Member.objects.filter(pk = request.data.get('member_id'))[0]
        print('_______________________________________________________________')
        
        content = Content.objects.filter(Q(member = member)
                                        & Q(approval_by_admin = 'pending')
                                        & Q(title = request.data.get('title'))
                                        & Q(category = request.data.get('category')))
        print('__________________11111111111111111111111111111111111111_____________________________________________')
        
        content= content[0]
        print('_________________________1111111111111111111111111111111111111111______________________________________')
        
        print(content)

        if request.data.get('status') == "approved":
            if request.user.is_admin:
                content.approval_by_admin = "approved"
                content.approval_admin = f"{request.user.first_name} {request.user.last_name}"
                content.save()

            elif request.user.role == "moderator":
                content.approval_by_moderator = "approved"
                content.approval_moderator = f"{request.user.first_name} {request.user.last_name}"
                content.save()

        elif request.data.get('status') == "rejected":
            if request.user.is_admin:
                content.delete()

            elif request.user.role == "moderator":
                content.approval_by_moderator = "rejected"
                content.approval_moderator = f"{request.user.first_name} {request.user.last_name}"
                content.save()

        return Response("Details updated successfully", status=status.HTTP_200_OK)


class IsAdminView(APIView):

    def get(self, request, format=None):
        """
        GET request to check if the
        requested user is an admin.
        """

        return Response(request.user.is_admin)


class RemoveContentByAdminView(APIView):
    
    def post(self, request, format=None):
        """
        POST request for removing requested
        content from the reader section.
        """

        member = Member.objects.filter(username = request.data.get('username'))[0]
        content = Content.objects.filter(Q(member = member)
                                         & Q(category = request.data.get('category'))
                                         & Q(title = request.data.get('title')))[0]
        
        content.delete()
        
        return Response("Entry deleted!")