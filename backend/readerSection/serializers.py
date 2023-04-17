from rest_framework import fields, serializers
from readerSection.models import FileUpload

class ReaderSectionViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUpload
        fields = ['issuer', 'roll_number']

class ReaderSectionUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUpload
        fields = ['name', 'isbn', 'book_id', 'author', 'category']