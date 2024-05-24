from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
import json

# Create your views here.

def home(request):
    banners = BannersSerializer(Banner.objects.all(), many=True)
    return JsonResponse({"banner":banners.data})

@api_view(['POST'])
def createBanner(request):
    banners = BannersSerializer(data=request.data)
    if banners.is_valid():
        banners.save()
        return Response(banners.data)
    return Response(banners.errors)

def readBanner(request, id):
    banner = BannersSerializer(Banner.objects.get(id=id))
    return JsonResponse({'data':banner.data})

@api_view(['PUT'])
def updateBanner(request, id):
    banner = Banner.objects.get(id=id)
    banners = BannersSerializer(banner, data=request.data)
    if banners.is_valid():
        banners.save()
        return Response ({'success':'Élément modifié'})
    return Response(banners.errors)            

@api_view(['DELETE'])
def deleteBanner(request, id):
    banner = Banner.objects.get(id=id)
    banner.delete()
    return Response({'success':'Élément supprimé'})
