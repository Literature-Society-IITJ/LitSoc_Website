# Generated by Django 4.1.7 on 2023-06-10 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('readerSection', '0004_content_background'),
    ]

    operations = [
        migrations.AddField(
            model_name='content',
            name='approval_admin',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='content',
            name='approval_moderator',
            field=models.CharField(default='', max_length=200),
        ),
    ]