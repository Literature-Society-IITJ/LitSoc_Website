from django.db import models
from django.contrib.auth.models import User
from datetime import datetime,timedelta
# Create your models here.

class Book(models.Model):
    categories= [
        ('education', 'Education'),
        ('entertainment', 'Entertainment'),
        ('comics', 'Comics'),
        ('biography', 'Biography'),
        ('history', 'History'),
        ('novel', 'Novel'),
        ('fantasy', 'Fantasy'),
        ('thriller', 'Thriller'),
        ('romance', 'Romance'),
        ('scifi','Sci-Fi')
        ]
    name=models.CharField(max_length=30)
    isbn=models.PositiveIntegerField()
    book_id = models.CharField(max_length=10)
    author=models.CharField(max_length=40)
    category=models.CharField(max_length=30,choices=categories,default='education')
    def __str__(self):
        return str(self.name)+"["+str(self.book_id)+']'


def get_expiry():
    return datetime.today() + timedelta(days=15)

class IssuedBook(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    # book_id_temp = models.CharField(max_length=5)
    issuer = models.CharField(max_length=50)
    roll_number = models.CharField(max_length=8)
    # isbn=models.CharField(max_length=30)
    issuedate=models.DateField(auto_now=True)
    expirydate=models.DateField(default=get_expiry)
    def __str__(self):
        return self.roll_number