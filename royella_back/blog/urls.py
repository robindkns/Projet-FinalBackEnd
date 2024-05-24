from django.contrib import admin
from django.urls import path
from blog.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('blog/', blog),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)