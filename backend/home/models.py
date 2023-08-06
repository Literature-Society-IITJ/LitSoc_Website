from django.db import models
from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import AbstractUser
# Create your models here.

class MemberManager(BaseUserManager):
    def create_user(self, email, username, phone, roll_number, first_name, last_name, role="member", password=None, password2=None):
        """
        Creates and saves a User with the given email, name and password.
        """
        if not email:
            raise ValueError('Members must have an email address')

        user = self.model(
            first_name = first_name,
            last_name = last_name,
            username = username,
            roll_number = roll_number,
            phone = phone,
            email=self.normalize_email(email),
            role = role
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, phone, roll_number, first_name, last_name, role="admin", password=None):
        """
        Creates and saves a superuser with the given email, name and password.
        """
        user = self.create_user(
            email,
            username=username,
            phone=phone,
            roll_number=roll_number,
            first_name=first_name,
            last_name=last_name,
            password=password,
            role = 'admin'
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class Member(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    username = models.CharField(max_length=25, unique=True)
    roll_number = models.CharField(max_length=10, default="none", unique=True)
    phone = models.IntegerField(unique=True)
    email = models.EmailField(max_length=200, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    role = models.CharField(max_length = 20, default="member")
    date_time_created = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='profile', default='images/profile-icon.jpg')
    # book_issued = models.IntegerField(default=-1)

    objects = MemberManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'phone', 'roll_number', 'first_name', 'last_name']

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

    def is_moderator(self):
        "Is the user a moderator?"
        if self.role == "member":
            return False
        return True

class EmailVerification(models.Model):
    email = models.EmailField(unique=True)
    otp = models.IntegerField(default=0000)
    request_time = models.DateTimeField()
    is_verified = models.BooleanField(default=False)
