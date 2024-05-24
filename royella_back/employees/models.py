from django.db import models

# Create your models here.

class Manager(models.Model):
    name = models.CharField(max_length=100)
    poste = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    quote = models.CharField(max_length=200)

class Employee(models.Model):
    name = models.CharField(max_length=100)
    poste = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    email = models.EmailField(max_length=254)