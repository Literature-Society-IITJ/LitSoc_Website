from rest_framework import fields, serializers
from library.models import IssuedBook, Book, IssueRequest

class BookIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = IssuedBook
        fields = ['member']


class BookAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['name', 'isbn', 'book_id', 'author', 'category']


class BookReturnSerializer(serializers.ModelSerializer):
    class Meta:
        model = IssuedBook
        fields = ['member']


class BookIssueRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = IssueRequest
        fields = ['book', 'member', 'moderator', 'approved']