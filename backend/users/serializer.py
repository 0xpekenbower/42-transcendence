from rest_framework import serializers
from .models import Account
import pyotp

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    repassword = serializers.CharField(write_only=True)

    class Meta:
        model = Account
        fields = ['first_name', 'last_name','email', 'username', 'password', 'repassword']

    def create(self, validated_data):
        user = Account(email=validated_data.get('email'),
                    username=validated_data.get('username'),
                    first_name=validated_data.get('first_name'),
                    last_name=validated_data.get('last_name'),
                    otp_secret=pyotp.random_base32())
        user.set_password(validated_data['password'])
        user.save()
        return user


########## # OTP   [DO NOT REMOVE IT] USED ALSO ON JWT SETTINGS
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        totp = pyotp.TOTP(user.otp_secret)
        user.otp_code = totp.now()
        user.is_otp_verified = False
        user.save()
        send_otp(user)
        return token
        

from django.core.mail import send_mail
from django.conf import settings
import smtplib

def send_otp(user):
    try:
        send_mail(f'Your Pong code is {user.otp_code}',
            f'Hey {user.username}, Please Enter the code below to verify your login \n{user.otp_code}',
            settings.EMAIL_HOST_USER,
            [user.email],
            fail_silently=False)
        return True
    except smtplib.SMTPException as e:
        print('[-] Failed to send the OTP code ' + e)
        return False

class OTPSerializer(serializers.Serializer):
    form_OTP = serializers.CharField(required=True, max_length=6)


###### RESET PASS
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
class ResetPasswordSerializerSuccess(serializers.Serializer):
    new_password1 = serializers.CharField(write_only=True)
    new_password2 = serializers.CharField(write_only=True)
    def validate(self, data):
        if (data['new_password1'] != data['new_password2']):
            raise serializers.ValidationError("Passwords does not match")
        try:
            validate_password(data['new_password1'])
        except ValidationError as e:
            raise serializers.ValidationError(e.messages)
        return data