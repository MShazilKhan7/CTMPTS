from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import CustomUser
import jwt
import datetime

# Create your views here.
class RegisterUser(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    
    
    
class LoginUser(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']     

        user = CustomUser.objects.filter(username=username).first()
        
        if user is None:
            raise AuthenticationFailed("user not found") 

        if not user.check_password(password):
            raise AuthenticationFailed("incorrect password")

        payload = {
            'id': user.id,
            'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=120),
            'iat': datetime.datetime.utcnow()
        }
        
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        respone  = Response()
        #  setting in the cookies

        respone.set_cookie(key='jwt', value=token, httponly=True)
        respone.data = {
            'jwt': token
        }
        
        return respone

