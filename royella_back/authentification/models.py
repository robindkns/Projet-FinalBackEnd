from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Role(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class User(AbstractUser):
    image = models.ImageField(upload_to='images/', null=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, default=5)