from django.contrib import admin
from django.urls import path
from blog.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('blog/', blog),
    path('createBlog/', createBlog),
    path('deleteBlog/<int:id>/', deleteBlog),
    path('readBlog/<int:id>/', readBlog),
    path('updateBlog/<int:id>/', updateBlog),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)