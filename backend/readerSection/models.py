from django.db import models
from home.models import Member

# Create your models here.


class Content(models.Model):
    categories= [
        ('poem', 'Poem'),
        ('article', 'Article'),
        ('fanfiction', 'Fanfiction'),
        ('prose', 'Prose'),
        ('essay', 'Essay')
        ]
    
    approval_categories= [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected')
    ]
    # member_name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    category = models.CharField(max_length=30,choices=categories,default='prose')
    # roll_number = models.ForeignKey(Member, on_delete=models.CASCADE,default='none')
    content = models.TextField()
    approval_by_admin = models.CharField(max_length=20, choices=approval_categories, default='pending')
    approval_by_moderator = models.CharField(max_length=20, choices=approval_categories, default='pending')