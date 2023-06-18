from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    class Meta:
        model = get_user_model()
        exclude = (
            'is_superuser', 
            'is_staff', 
            'groups', 
            'user_permissions', 
            'last_login', 
            'date_joined', 
            'is_active'
            )
        
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super().create(validated_data)






