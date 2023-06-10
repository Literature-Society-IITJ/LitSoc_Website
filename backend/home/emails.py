from django.core.mail import send_mail
import random
from django.conf import settings
from .models import EmailVerification

def send_otp_via_email(email):
    subject = "Account Verification"
    otp = random.randint(1000, 9999)
    message = f"Congratulations! You are just one step away from becomimg a Literati. Verify your email. OTP for verification: {otp}"
    email_from = settings.EMAIL_HOST
    send_mail(subject, message, email_from, [email])
    temp_member = EmailVerification.objects.get(email = email)
    temp_member.otp = otp
    temp_member.save()