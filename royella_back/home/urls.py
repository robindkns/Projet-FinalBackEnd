from django.contrib import admin
from django.urls import path
from home.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('home/', home),
    path('createBanner/', createBanner),
    path('readBanner/<int:id>/', readBanner),
    path('updateBanner/<int:id>/', updateBanner),
    path('deleteBanner/<int:id>/', deleteBanner),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)