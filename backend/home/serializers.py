from rest_framework import fields, serializers
from home.models import Member
import re
# from django.contrib.auth import get_user_model


class MemberRegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = Member
        fields = ["email", "name" ,"roll_number", "password", 'password2']
        extra_kwargs={
            'password':{'write_only':True}
        }

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')

        if password != password2:
            raise serializers.ValidationError('Passwords do not match')

        email = attrs.get('email')
        if not re.search(r"^[A-Za-z0-9._%+-]+@iitj.ac.in$", email):
            raise serializers.ValidationError('Not a valid email address')

        return attrs

    def create(self, validate_data):
        # email = validate_data.get('email')
        # user_name = validate_data.get('user_name')
        # password = validate_data.get('password')

        return Member.objects.create_user(**validate_data)

class MemberLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length = 200)
    class Meta:
        model = Member
        fields = ['email', 'password']

class MemberProfileViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'email', 'name']
        