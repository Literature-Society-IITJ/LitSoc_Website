from rest_framework import fields, serializers
from library.models import IssuedBook, Book

class BookIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = IssuedBook
        fields = ['issuer', 'roll_number']

class BookAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['name', 'isbn', 'book_id', 'author', 'category']

class BookViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['category',]