from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import FileUploadParser
# Create your views here.

class FileUploadView(APIView):
    parser_classes = (FileUploadParser, )

    def post(self, request, format='jpg'):
        up_file = request.FILES['file']
        destination = open('/Users/Username/' + up_file.name, 'wb+')
        for chunk in up_file.chunks():
            destination.write(chunk)
        destination.close()  # File should be closed only after all chuns are added

        # ...
        # do some stuff with uploaded file
        # ...
        return Response(up_file.name, status.HTTP_201_CREATED)