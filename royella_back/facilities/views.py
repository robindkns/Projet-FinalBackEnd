from django.shortcuts import render
from django.http import JsonResponse
from facilities.models import *
from facilities.serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def facilities(request):
    facilities = FacilitiesSerializer(Facilities.objects.all(), many=True)
    return JsonResponse({"facilities":facilities.data})

def readFacilities(request, id):
    facilities = FacilitiesSerializer(Facilities.objects.get(id=id))
    return JsonResponse({'facility':facilities.data})

@api_view(['PUT'])
def updateFacilities(request, id):
    facility = Facilities.objects.get(id=id)
    facilities = FacilitiesSerializer(facility, data=request.data)
    if facilities.is_valid():
        facilities.save()
        return Response ({'success':'Élément modifié'})
    return Response(facilities.errors)        

@api_view(['DELETE'])
def deleteFacilities(request, id):
    facility = Facilities.objects.get(id=id)
    facility.delete()
    return Response({'success':'Élément supprimé'})

@api_view(['POST'])
def createFacilities(request):
    facilities = FacilitiesSerializer(data=request.data)
    if facilities.is_valid():
        facilities.save()
        return Response(facilities.data)
    return Response(facilities.errors)