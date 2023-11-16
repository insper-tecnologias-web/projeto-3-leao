from django.db import models

# Primeiro, defina o modelo User
class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    # Não é necessário o campo cars aqui, pois a relação será definida no modelo Car

# Depois, defina o modelo Car
class Car(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cars', default= False)
    price = models.DecimalField(max_digits=10, decimal_places=2, default= False)
    brand = models.CharField(max_length=50, default= False)
    model = models.CharField(max_length=200, default= False)
    year = models.IntegerField(default= False)  # Não precisa de max_length para IntegerField
    fuel = models.CharField(max_length=50 , default= False)
    fipeCode = models.CharField(max_length=50, default= False)
