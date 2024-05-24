from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def services(request):
    services = ServicesSerializer(Service.objects.all(), many=True)
    return JsonResponse({"services" : services.data}) 

def readService(request, id):
    service = ServicesSerializer(Service.objects.get(id=id))
    return JsonResponse({'service':service.data})

@api_view(['PUT'])
def updateService(request, id):
    service = Service.objects.get(id=id)
    services = ServicesSerializer(service, data=request.data)
    if services.is_valid():
        services.save()
        return Response ({'success':'Élément modifié'})
    return Response(services.errors)        