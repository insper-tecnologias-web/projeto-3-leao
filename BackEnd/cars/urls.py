from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/cars/<int:car_id>/', views.api_note),
]