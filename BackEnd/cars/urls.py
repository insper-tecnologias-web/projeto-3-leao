from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/cars/', views.api_cars),
    # path('api/users', views.api_users),
    path('api/token/', views.api_get_token),
    path('api/users/', views.api_user),
    path('api/checkuserexistence', views.checkUserExistence),
    path('api/getuser', views.getUser)
]
