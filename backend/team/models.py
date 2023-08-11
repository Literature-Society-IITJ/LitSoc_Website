from django.db import models

# Create your models here.

class Team(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to = 'team', default=None)
    por = models.CharField(max_length=200)
    year = models.IntegerField()
    mail = models.EmailField(default=None)
    linkedin = models.URLField(max_length=200, blank=True)
    instagram = models.URLField(max_length=200, blank=True)
    quote = models.CharField(max_length=200, blank=True)
    div_id = models.CharField(max_length=200)
    hierarchy = models.IntegerField(default=1)

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.name
