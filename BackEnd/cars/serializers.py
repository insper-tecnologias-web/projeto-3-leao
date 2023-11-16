from rest_framework import serializers
from .models import Note


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title']