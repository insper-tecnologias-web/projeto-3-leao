from django.http import HttpResponse
from rest_framework.response import Response
from django.http import Http404, HttpResponseForbidden, JsonResponse
from .serializers import CarSerializer, UserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


from .models import Car, User


def index(request):
    return HttpResponse("Olá mundo! Este é o app LEÃOOOOO")


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def api_cars(request):
    if request.method == "POST":
        new_car_data = request.data
        new_car_data['user'] = request.user
        Car.objects.create(**new_car_data)
        return Response({'published': 'Carro publicado com sucesso!'}, status=201)

    if request.method == 'GET':
        print("LALALALALLALA")
        cars = Car.objects.all()
        serialized_car = CarSerializer(cars, many=True)
        return Response(serialized_car.data)

    return Response({'message': 'Invalid request method'}, status=400)


@api_view(['GET', 'POST'])
def api_user(request):
    if request.method == 'GET':
        users = User.objects.all()
        serialized_users = UserSerializer(users, many=True)
        return Response(serialized_users.data)
    if request.method == 'POST':
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']

        user = User.objects.create_user(username, email, password)
        user.save()
        return Response(status=204)


@api_view(['POST'])
def api_get_token(request):
    try:
        if request.method == 'POST':
            username = request.data['username']
            password = request.data['password']
            print(password)
            user = authenticate(username=username, password=password)

            if user is not None:
                token, created = Token.objects.get_or_create(user=user)
                return JsonResponse({"token": token.key})
            else:
                return JsonResponse({"token": None})
    except:
        return HttpResponseForbidden()


@api_view(['GET'])
def checkUserExistence(request):
    if request.method == 'GET':
        email = request.query_params.get('email', '')
        username = request.query_params.get('username', '')
        email_exists = User.objects.filter(email=email).exists()
        username_exists = User.objects.filter(username=username).exists()
        return Response({'email_exists': email_exists, 'username_exists': username_exists})


@api_view(['GET'])
def getUser(request):
    if request.method == 'GET':
        username = request.query_params.get('username', '')
        if (User.objects.filter(username=username).exists()):
            user = User.objects.get(username=username)
            resposta = Response(
                {'username': user.username, 'email': user.email})
        else:
<<<<<<< HEAD
            resposta = Response({'username':None, 'email':None})
=======
            resposta = Response({'username': None, 'email': None})
>>>>>>> 268a3a522dd70a0f15c30ae94418ca7d818be295

        return resposta
    
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def userCars(request):
    user = request.user
    if request.method == 'GET':
        cars = Car.objects.filter(user=user)
        serialized_car = CarSerializer(cars, many=True)
        return Response(serialized_car.data)
    
    return Response({'message': 'Invalid request method'}, status=400)