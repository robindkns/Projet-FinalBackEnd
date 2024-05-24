from django.contrib import admin
from django.urls import path
from pricing.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('pricing/', pricing),
    path('faq/', faq),
    path('createFaq/', createFaq),
    path('deleteFaq/<int:id>/', deleteFaq),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)