from django.db import models
from home.models import Member

# Create your models here.


class FileUpload(models.Model):
    categories= [
        ('poem', 'Poem'),
        ('article', 'Article'),
        ('fanfiction', 'Fanfiction'),
        ('prose', 'Prose'),
        ('essay', 'Essay')
        ]
    member_name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    roll_number = models.ForeignKey(Member, on_delete=models.CASCADE,default='none')
    category=models.CharField(max_length=30,choices=categories,default='prose')
    file = models.FileField()