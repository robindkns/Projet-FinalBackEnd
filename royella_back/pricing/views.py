from django.shortcuts import render
from .serializers import *
from .models import *
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def pricing(request):
    pricing = PricingSerializer(Pricing.objects.all(), many=True)
    return JsonResponse({"pricing":pricing.data})

def faq(request):
    faq = FaqSerializer(Faq.objects.all(), many=True)
    return JsonResponse({"faq":faq.data})

@api_view(['POST'])
def createFaq(request):
    faq = FaqSerializer(data=request.data)
    if faq.is_valid():
        faq.save()
        return Response(faq.data)
    return Response(faq.errors)

@api_view(['DELETE'])
def deleteFaq(request, id):
    faq = Faq.objects.get(id=id)
    faq.delete()
    return Response({'success':'Élément supprimé'})