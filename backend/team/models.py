from django.db import models

# Create your models here.

class Team(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to = 'team', default=None)
    por = models.CharField(max_length=200)
    year = models.IntegerField()
    linkedin = models.URLField(max_length=200)
    instagram = models.URLField(max_length=200)
    description = models.CharField(max_length=200)
    hierarchy = models.IntegerField(default=1)

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.name