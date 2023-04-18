from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import FileUploadParser
from readerSection.serializers import ReaderSectionViewSerializer, ReaderSectionUploadSerializer
from readerSection.models import Content
from home.models import Member
from django.db.models import Q
# Create your views here.

class ContentUploadView(APIView):
    # parser_classes = (FileUploadParser, )

    def post(self, request, format='jpg'):
        serializer = ReaderSectionUploadSerializer(data=request.data)
        if serializer.is_valid():
            new = serializer.save()
            return Response({'new': serializer.data, 'msg': 'Content Uploaded Successfully'}, status=status.HTTP_200_OK)
        return Response("Please check the credentials", status=status.HTTP_404_NOT_FOUND)
        # ...
        # do some stuff with uploaded file
        # ...
        # return Response(serializer.data, status.HTTP_201_CREATED)


class ContentReadView(APIView):
    def get(self, request, format=None):
        category = request.query_params.get('category')
        content = Content.objects.filter(Q(category = category) & Q(approval_by_admin = "approved")).values()
        return Response(list(content), status=status.HTTP_200_OK)


class ContentModeratorApprovalView(APIView):
    def get(self, request, format=None):
        if request.user.role == "moderator":
            upload_requests = Content.objects.filter(approval_by_moderator = "pending").values()
        return Response(list(upload_requests), status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        if request.user.role == "moderator":
            content = Content.objects.filter(member = request.data.get('member')).values()
            content= content[0]
            if request.data.get('status') == "approved":
                content.approval_by_moderator = "approved"

            elif request.data.get('status') == "rejected":
                content.approval_by_moderator = "rejected"
            content.save()
        return Response("Details updated successfully", status=status.HTTP_200_OK)
    

class ContentAdminApprovalView(APIView):
    def get(self, request, format=None):
        if request.user.is_admin:
            upload_requests = Content.objects.filter(approval_by_admin="pending").exclude(approval_by_moderator="pending").values()
        return Response(list(upload_requests), status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        if request.user.is_admin:
            content = Content.objects.filter(member = request.data.get('member')).values()
            content= content[0]
            if request.data.get('status') == "approved":
                content.approval_by_admin = "approved"

            elif request.data.get('status') == "rejected":
                content.delete()
        return Response("Details updated successfully", status=status.HTTP_200_OK)
