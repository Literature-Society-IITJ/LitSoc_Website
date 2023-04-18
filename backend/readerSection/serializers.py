from rest_framework import fields, serializers
from readerSection.models import Content

class ReaderSectionViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['title', 'roll_number', 'category', 'content']

class ReaderSectionUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['title', 'roll_number', 'category', 'content']
