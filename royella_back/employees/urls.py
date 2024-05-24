from django.contrib import admin
from django.urls import path
from employees.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('employees/', employees),
    path('manager/', manager),
    path('updateManager/', updateManager),
    path('deleteEmployees/<int:id>/', deleteEmployees),
    path('updateEmployees/<int:id>/', updateEmployees),
    path('readEmployees/<int:id>/', readEmployees),
    path('createEmployees/', createEmployees),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)