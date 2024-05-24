from django.shortcuts import render
from django.http import JsonResponse
from hotel.models import *
from hotel.serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def hotel(request):
    hotel = HotelSerializer(Hotel.objects.get(id=1))
    return JsonResponse({"hotels":hotel.data})

@api_view(['PUT'])
def updateHotel(request):
    hotel = Hotel.objects.get(id=1)
    hotels = HotelSerializer(hotel, data=request.data)
    if hotels.is_valid():
        hotels.save()
        return Response ({'success':'Élément modifié'})
    return Response(hotels.errors)           