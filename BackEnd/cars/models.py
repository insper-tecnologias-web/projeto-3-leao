from django.db import models
from django.contrib.auth.models import User

# Primeiro, defina o modelo User
""" class User(models.Model):
    name = models.TextField(default="")
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    # Não é necessário o campo cars aqui, pois a relação será definida no modelo Car

    def __str__(self):
       return f"{self.id}. {self.name}" """

# Depois, defina o modelo Car
class Car(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2, default= False)
    brand = models.CharField(max_length=50, default= False)
    model = models.CharField(max_length=200, default= False)
    year = models.IntegerField(default= False)  # Não precisa de max_length para IntegerField
    fuel = models.CharField(max_length=50 , default= False)
    fipeCode = models.CharField(max_length=50, default= False)

    def __str__(self):
        return f"{self.id}. {self.brand} {self.model} {self.year}"
