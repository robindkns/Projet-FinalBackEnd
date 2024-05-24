from django.contrib import admin
from django.urls import path
from facilities.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('facilities/', facilities),
    path('deleteFacilities/<int:id>/', deleteFacilities),
    path('updateFacilities/<int:id>/', updateFacilities),
    path('readFacilities/<int:id>/', readFacilities),
    path('createFacilities/', createFacilities),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)