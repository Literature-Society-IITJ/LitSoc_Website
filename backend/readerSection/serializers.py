from rest_framework import fields, serializers
from readerSection.models import ContentUpload

class ReaderSectionViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentUpload
        fields = ['title', 'roll_number', 'category', 'content']

class ReaderSectionUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentUpload
        fields = ['title', 'roll_number', 'category', 'content']
