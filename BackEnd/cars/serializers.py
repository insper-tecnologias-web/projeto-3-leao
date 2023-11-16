from rest_framework import serializers
from .models import Car, User


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'user', 'price', 'brand', 'model', 'year', 'fuel', 'fipeCode']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']

