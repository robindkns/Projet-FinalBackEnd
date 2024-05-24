from django.db import models

# Create your models here.

class Pricing(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    image = models.ImageField(upload_to='images/')
    service_1 = models.CharField(max_length=100)
    service_2 = models.CharField(max_length=100)
    service_3 = models.CharField(max_length=100)
    service_4 = models.CharField(max_length=100)

class Faq(models.Model):
    question = models.CharField(max_length=100)
    response = models.CharField(max_length=200)
    active = models.BooleanField(default=False)