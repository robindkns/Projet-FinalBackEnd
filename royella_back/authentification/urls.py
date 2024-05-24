from django.contrib import admin
from django.urls import path
from authentification.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('login/', login),
    path('register/', register),
    path('logout/', logout),
    path('get_user/', get_user),
    path('users/', users),
    path('roles/', roles),
    path('updateRoleUser/<int:id>/', update_roleuser),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)