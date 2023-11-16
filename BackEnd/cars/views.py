from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .serializers import CarSerializer, UserSerializer

from .models import Car, User

def index(request):
    return HttpResponse("Olá mundo! Este é o app LEÃOOOOO")

@api_view(['GET', 'POST'])
def api_car(request, car_id):
    try:
        car = Car.objects.get(id=car_id)
    except Car.DoesNotExist:
        raise Http404()
    serialized_car = CarSerializer(car)
    return Response(serialized_car.data)

@api_view(['GET', 'POST'])
def api_users(request):
    if request.method == 'GET':
        users = User.objects.all()
        serialized_users = UserSerializer(users, many=True)
        return Response(serialized_users.data)
    elif request.method == 'POST':
        serialized_user = UserSerializer(data=request.data)
        if serialized_user.is_valid():
            serialized_user.save()
            return Response(serialized_user.data, status=201)
        return Response(serialized_user.errors, status=400)