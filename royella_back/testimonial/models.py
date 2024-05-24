from django.db import models

# Create your models here.

class Testimonial(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    rating = models.IntegerField( null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    testi = models.TextField( null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)