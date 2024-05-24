from django.shortcuts import render
from .serializers import *
from .models import *
from django.http import JsonResponse

# Create your views here.

def blog(request):
    tags = TagSerializer(Tag.objects.all(), many=True)
    categories = CategorySerializer(Category.objects.all(), many=True)
    blogs = BlogSerializer(Blog.objects.all(), many=True)
    comments = CommentSerializer(Comment.objects.all(), many=True)
    return JsonResponse({"tags":tags.data, "categories":categories.data, "blogs":blogs.data, "comments":comments.data})