# Generated by Django 4.1.7 on 2023-06-09 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='image',
            field=models.ImageField(default='images/profile-icon.jpg', upload_to='profile'),
        ),
    ]
