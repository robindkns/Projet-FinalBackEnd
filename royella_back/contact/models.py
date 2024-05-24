from django.db import models

# Create your models here.

class Form(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    sujet = models.CharField(max_length=100)
    message = models.TextField()
    
class Contact(models.Model):
    tel = models.CharField(max_length=100)
    email = models.EmailField(max_length=250)
    location = models.CharField(max_length=250)
    maps = models.CharField(max_length=500)

class Images(models.Model):
    image = models.ImageField(upload_to='images/')