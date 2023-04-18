from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import FileUploadParser
from readerSection.serializers import ReaderSectionViewSerializer, ReaderSectionUploadSerializer
from readerSection.models import ContentUpload
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
    
class ReadView(APIView):
    def get(self, request, format=None):
        category = request.query_params.get('category')
        content = ContentUpload.objects.filter(category = category).values()
        return Response(list(content), status=status.HTTP_200_OK)