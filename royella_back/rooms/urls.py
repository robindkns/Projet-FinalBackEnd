from django.contrib import admin
from django.urls import path
from rooms.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('rooms/', rooms),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)