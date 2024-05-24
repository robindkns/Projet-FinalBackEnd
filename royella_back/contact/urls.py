from django.contrib import admin
from django.urls import path
from contact.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('form/', form),
    path('contact/', contact),
    path('images/', images),
    path('updateContact/', updateContact)
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)