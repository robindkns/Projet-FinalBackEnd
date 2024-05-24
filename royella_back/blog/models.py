from django.db import models

# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Blog(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', null=True)
    text = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    tag = models.ManyToManyField(Tag)

class Comment(models.Model):
    author = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    date = models.DateField(auto_now_add=True)
    text = models.TextField()
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)