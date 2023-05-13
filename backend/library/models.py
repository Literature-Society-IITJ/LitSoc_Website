from django.db import models
from django.contrib.auth.models import User
from datetime import datetime,timedelta
from home.models import Member
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
    
    name=models.CharField(max_length=30, blank=True)
    isbn=models.PositiveBigIntegerField()
    book_id = models.CharField(max_length=10)
    author=models.CharField(max_length=40)
    category=models.CharField(max_length=30,choices=categories,default='education')
    
    def __str__(self):
        return str(self.isbn)
        # return str(self.name)+"["+str(self.book_id)+']'

    # USERNAME_FIELD = 'isbn'

def get_expiry():
    return datetime.today() + timedelta(days=15)


class IssueRequest(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    moderator = models.CharField(max_length=100, default='')
    approved = models.BooleanField(default=False)


class IssuedBook(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    issue_date=models.DateField(auto_now=True)
    return_date=models.DateField(default=get_expiry)
    availability = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.book.name} is issued to {self.member.roll_number}'
