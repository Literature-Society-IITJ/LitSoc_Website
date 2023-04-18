from rest_framework import fields, serializers
from library.models import IssuedBook, Book, IssueRequest

class BookIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = IssuedBook
        fields = ['roll_number']


class BookAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['name', 'isbn', 'book_id', 'author', 'category']


class BookReturnSerializer(serializers.ModelSerializer):
    class Meta:
        model = IssuedBook
        fields = ['roll_number']


class BookIssueRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = IssueRequest
        fields = ['book', 'roll_number', 'moderator', 'approved']