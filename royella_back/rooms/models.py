from django.db import models

# Create your models here.

class Amenity(models.Model):
    title = models.CharField(max_length=70)
    image = models.CharField(max_length=100)
    def __str__(self):
        return self.title

class Room(models.Model):
    title = models.CharField(max_length=70)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    price = models.FloatField()
    size = models.IntegerField()
    rating = models.FloatField()
    beds = models.IntegerField()
    quantity = models.IntegerField()
    amenities = models.ManyToManyField(Amenity)
    date_in = models.DateField()
    date_out = models.DateField()
    discount = models.IntegerField()
