from django.db import models

# Create your models here.

class Hotel(models.Model):
    title = models.CharField(max_length=70)
    description = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    location = models.CharField(max_length=200)
    video = models.CharField(max_length=500)