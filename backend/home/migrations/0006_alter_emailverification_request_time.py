# Generated by Django 4.1.7 on 2023-08-02 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_alter_emailverification_request_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emailverification',
            name='request_time',
            field=models.DateTimeField(),
        ),
    ]