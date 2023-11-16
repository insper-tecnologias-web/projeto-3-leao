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
    try:
        users = User.objects.all()
    except User.DoesNotExist:
        raise Http404()
    
    if request.method == 'GET':
        serialized_users = UserSerializer(users, many=True)
        return Response(serialized_users.data)
    
    elif request.method == 'POST':
        new_user_data = request.data
        serializer = UserSerializer(data=new_user_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    

    