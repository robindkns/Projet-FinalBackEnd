from django.shortcuts import render
from django.http import JsonResponse
from rooms.models import *
from rooms.serializers import *

# Create your views here.

def rooms(request):
    rooms = RoomsSerializer(Room.objects.all(), many=True)
    amenities = AmenitySerializer(Amenity.objects.all(), many=True)
    return JsonResponse({"rooms":rooms.data, "amenities":amenities.data})