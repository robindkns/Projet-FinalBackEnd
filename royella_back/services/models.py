from django.db import models

# Create your models here.

class Service(models.Model):
    order = models.IntegerField()
    theme = models.CharField(max_length=70)
    title = models.CharField(max_length=70)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    description = models.TextField()