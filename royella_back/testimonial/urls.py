from django.contrib import admin
from django.urls import path
from testimonial.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('testimonial/', testimonial),
    path('createTestimonial/', createTestimonial),
    path('deleteTestimonial/<int:id>/', deleteTestimonial),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)