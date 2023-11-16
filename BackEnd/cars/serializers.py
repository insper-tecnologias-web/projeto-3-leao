from rest_framework import serializers
from .models import Car, User


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'name', 'email', 'password', 'cars']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'user', 'price', 'brand', 'model', 'year', 'fuel', 'fipeCode']


