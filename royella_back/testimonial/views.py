from django.shortcuts import render
from .serializers import *
from django.http import JsonResponse
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def testimonial(request):
    testimonials = TestimonialSerializer(Testimonial.objects.all(), many=True)
    return JsonResponse({"testimonial":testimonials.data})

@api_view(['POST'])
def createTestimonial(request):
    testimonial = TestimonialSerializer(data=request.data)
    if testimonial.is_valid():
        testimonial.save()
        return Response(testimonial.data)
    return Response(testimonial.errors)

@api_view(['DELETE'])
def deleteTestimonial(request, id):
    testimonial = Testimonial.objects.get(id=id)
    testimonial.delete()
    return Response({'success':'Élément supprimé'})