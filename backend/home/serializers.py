from rest_framework import serializers
from home.models import Member
import re


class MemberRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True
    )

    class Meta:
        model = Member
        fields = [
            "email",
            "first_name",
            "last_name",
            "username",
            "roll_number",
            "phone",
            "password",
            'password2'
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')

        if password != password2:
            raise serializers.ValidationError('Passwords do not match')

        email = attrs.get('email')
        if not re.search(r"^[A-Za-z0-9._%+-]+@iitj.ac.in$", email):
            raise serializers.ValidationError('Enter a valid email address')

        phone = attrs.get('phone')
        length_phone = len(str(phone))
        if length_phone != 10:
            raise serializers.ValidationError('Enter a valid phone number')

        special = ['@', '.', '_', '$']

        flag = 0
        if len(password)>=8:
            flag += 1

        for i in special:
            if i in password:
                flag += 1
                break

        for i in range(65, 91):
            if chr(i) in password:
                flag += 1
                break

        for i in range(0,10):
            if str(i) in password:
                flag += 1
                break

        if flag < 4:
            raise serializers.ValidationError('Enter a valid password')

        roll_number = attrs.get('roll_number')
        roll = ['B', 'M', 'P', 'C', 'D']
        if roll_number[0] not in roll:
            raise serializers.ValidationError('Enter a valid roll number')

        return attrs

    def create(self, validate_data):
        return Member.objects.create_user(**validate_data)


class MemberLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=200)

    class Meta:
        model = Member
        fields = ['email', 'password']


class MemberProfileViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['username', 'role', 'is_admin']


class FullMemSz(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = [
            'id',
            'first_name',
            'last_name',
            'username',
            'roll_number',
            'phone',
            'email',
            'is_active',
            'is_admin',
            'role',
            'date_time_created'
        ]
