# Generated by Django 4.1.7 on 2023-04-18 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Member",
            fields=[
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("first_name", models.CharField(max_length=200)),
                ("last_name", models.CharField(max_length=200)),
                ("username", models.CharField(max_length=25, unique=True)),
                (
                    "roll_number",
                    models.CharField(default="none", max_length=10, unique=True),
                ),
                ("phone", models.IntegerField(unique=True)),
                ("email", models.EmailField(max_length=200, unique=True)),
                ("is_active", models.BooleanField(default=True)),
                ("is_admin", models.BooleanField(default=False)),
                ("role", models.CharField(default="member", max_length=20)),
                ("date_time_created", models.DateTimeField(auto_now_add=True)),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
