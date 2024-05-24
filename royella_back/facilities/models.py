from django.db import models

# Create your models here.

class Facilities(models.Model):
    title = models.CharField(max_length=70,null=True, blank=True)
    icon = models.CharField(max_length=70,null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)