from django.db import models
from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import AbstractUser

# Create your models here.

class MemberManager(BaseUserManager):
    def create_user(self, email, name, password=None, password2=None):
        """
        Creates and saves a User with the given email, name and password.
        """
        if not email:
            raise ValueError('Members must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        """
        Creates and saves a superuser with the given email, name and password.
        """
        user = self.create_user(
            email,
            name=name,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class Member(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    # phone = models.CharField(max_length=10)
    email = models.EmailField(max_length=200, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    roll_number = models.CharField(max_length=10, default="none")
    date_time_created = models.DateTimeField(auto_now_add=True)

    objects = MemberManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specifc permission?"
        return self.is_admin
    
    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        return True

    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin

