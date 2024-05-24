# from django.shortcuts import render
# from django.http import JsonResponse
# from django.contrib.auth.hashers import make_password
# from django.core.mail import send_mail
# from rest_framework.decorators import api_view

# from .models import *
# from .serializers import *
# import json
# from django.contrib.auth import authenticate, login, logout
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework_simplejwt.tokens import RefreshToken

#####

from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth import login as django_login
from django.contrib.auth import logout as django_logout
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
import json
from django.conf import settings

# Create your views here.

@api_view(['POST'])
def register(request):
    user = UserSerializer(data=request.data)
    if User.objects.filter(username=request.data['username']).exists():
        return JsonResponse({'status':'error','message':'Username already exists.'})
    if user.is_valid():
        user.save(password=make_password(request.data['password']))
        email_from = settings.EMAIL_HOST_USER
        send_mail("Registration confirmation to our beautiful website 👁️",f'Hello {request.data['first_name']} ! Thank you soooo much for your registration, we will put your datas to very good uses, do not worry ;)' , email_from, [request.data['email']])
        return JsonResponse({'status':'success','message':'Registration confirmed.'})

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        django_login(request._request, user)
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        return JsonResponse({'status':'success','message': 'Connexion réussie', 'access_token' : access_token, 'refresh_token' : str(refresh)})
    else :
        return JsonResponse({'status':'error', 'message':"Nom d'utilisateur ou mot de passe incorrect."})

@api_view(['POST'])
def logout(request):
    django_logout(request._request)
    return JsonResponse({'status':'success','message': 'User disconnected.'})

def get_user(request):
    try:
        auth = JWTAuthentication()
        user, _ = auth.authenticate(request)
    except:
        return JsonResponse({'error' : 'Erreur de connexion'})
    mon_user = {
        'username' : user.username,
        'id' : user.id,
        'superuser' : user.is_superuser,
        'role' : user.role.name
    }
    print(mon_user)
    return JsonResponse({'user':mon_user})

def users(request):
    users = UserSerializer(User.objects.all(), many=True)
    roles = RoleSerializer(Role.objects.all(), many=True)
    return JsonResponse({'users':users.data, 'roles':roles.data})

def roles(request):
    roles = RoleSerializer(Role.objects.all(), many=True)
    return JsonResponse({'roles':roles.data})

def update_roleuser(request, id):
    user = User.objects.get(id=id)
    users = UserSerializer(user, data=request.data)
    if users.is_valid():
        users.save()
        return Response ({'success':'Élément modifié'})
    return Response({'error':'Erreur, élément non modifié'})