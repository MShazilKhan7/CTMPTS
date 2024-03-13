from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .models import CustomUser
import jwt
import datetime
from functools import wraps
from .auth_decorators import JWT_Authentication
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
            'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response  = Response()
        #  setting in the cookies
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        
        return response
       
class TokenVerification(APIView):
    def post(self, request, *args, **kwargs):
        try:
            token = request.data.get('jwt')
            print(token)
            if token is None:
                raise AuthenticationFailed('Unauthenticated')
            data         = jwt.decode(token, 'secret', algorithms="HS256")
            user         = CustomUser.objects.get(id=data['id'])
            request.user = user
            print(user, "request.user", request.user)
                
        except jwt.ExpiredSignatureError:
            return Response({'message':'Token is expired','status': status.HTTP_401_UNAUTHORIZED})
        except jwt.DecodeError:
            return Response({'message':'Token is invalid','status': status.HTTP_401_UNAUTHORIZED})
        except CustomUser.DoesNotExist:
            return Response({'message':'User does not exist','status': status.HTTP_401_UNAUTHORIZED})
        
        
        return Response({
            'message': "Success",
            'status': status.HTTP_200_OK
        })
    




