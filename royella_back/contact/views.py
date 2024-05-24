from django.shortcuts import render
from django.core.mail import send_mail
from django.http import JsonResponse
from .models import *
from .serializers import *
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def contact(request):
    contact = ContactSerializer(Contact.objects.get(id=1))
    return JsonResponse({"contact":contact.data})


@api_view(['POST'])
def form(request):
    data = json.loads(request.body)
    name = data.get('name')
    email = data.get('email')
    sujet = data.get('sujet')
    message = data.get('message')
    send_mail(sujet,message,email,['admin@gmail.com'])
    if request.method == 'POST':
        form = FormSerializer(data=request.data)
        if form.is_valid():
            form.save()
    return JsonResponse({'status':'success'})

def images(request):
    images = ImageSerializer(Images.objects.all(), many=True)
    return JsonResponse({'images': images.data})

@api_view(['PUT'])
def updateContact(request):
    contact = Contact.objects.get(id=1)
    contacts = ContactSerializer(contact, data=request.data)
    if contacts.is_valid():
        contacts.save()
        return Response ({'success':'Élément modifié'})
    return Response(contact.errors)        
