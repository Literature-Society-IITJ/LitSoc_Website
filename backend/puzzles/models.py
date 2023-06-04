from django.db import models

# Create your models here.

class Puzzle(models.Model):
    made_by = models.CharField(max_length=200)
    puzzle_type = models.CharField(max_length=200)
    puzzle_title = models.CharField(max_length=200)
    puzzle = models.FileField(upload_to='puzzle', default=None)