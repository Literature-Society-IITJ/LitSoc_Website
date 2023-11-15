from django.core.mail import EmailMessage
import os
import random

from .models import EmailVerification


def send_otp_via_email(email):
    subject = "Account Verification"
    otp = random.randint(1000, 9999)
    message = f"Congratulations! You are just one step away from becomimg a Literati. Verify your email. OTP for verification: {otp}"
    email_ = EmailMessage(
        subject=subject,
        body=message,
        from_email=os.environ.get('EMAIL_FROM'),
        to=[email]
    )
    email_.send()
    temp_member = EmailVerification.objects.filter(email=email)[0]
    temp_member.otp = otp
    temp_member.save()
