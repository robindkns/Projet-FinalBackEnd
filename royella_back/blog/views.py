from django.shortcuts import render
from .serializers import *
from .models import *
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from authentification.models import *

# Create your views here.

def blog(request):
    tags = TagSerializer(Tag.objects.all(), many=True)
    categories = CategorySerializer(Category.objects.all(), many=True)
    blogs = BlogSerializer(Blog.objects.all(), many=True)
    comments = CommentSerializer(Comment.objects.all(), many=True)
    return JsonResponse({"tags":tags.data, "categories":categories.data, "blogs":blogs.data, "comments":comments.data})

# Article
@api_view(['POST'])
def createBlog(request):
    blog = BlogSerializer(data=request.data)
    if blog.is_valid():
        tags = request.data.getlist('tag[]')
        print(tags)
        article = blog.save()
        if tags:
            article.tag.set(tags)
        else:
            article.tag.clear()
        email_from = settings.EMAIL_HOST_USER
        emails = User.objects.all().values_list('email', flat=True)
        print(emails)
        send_mail("Check out our new article !",f"Hello! check our new article : {request.data['title']} " , email_from, emails) 
        return Response({'success': 'New blog created successfully!'})
    return Response(blog.errors)

@api_view(['DELETE'])
def deleteBlog(request, id):
    blog = Blog.objects.get(id=id)
    blog.delete()
    return Response({'success':'Élément supprimé'})

def readBlog(request, id):
    blog = BlogSerializer(Blog.objects.get(id=id))
    return JsonResponse({'blog':blog.data})

@api_view(['PUT'])
def updateBlog(request, id):
    blogItem = Blog.objects.get(id=id)
    blog = BlogSerializer(blogItem, data=request.data)
    if blog.is_valid():
        tags = request.data.getlist('tag[]')
        arti = blog.save()
        if tags:
            arti.tag.set(tags)
        else:
            arti.tag.clear()
        return Response({'success': 'Blog updated successfully!'})
    return Response(blog.errors)