from week10project import views
from django.urls import path

urlpatterns = [
    path('', views.home),
    path('ccu410410014', views.ccu410410014_function)
]
