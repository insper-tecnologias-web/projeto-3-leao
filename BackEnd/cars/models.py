from django.db import models

# Create your models here.


class Car(models.Model):
    title = models.CharField(max_length=200)