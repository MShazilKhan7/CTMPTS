from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
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
            'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=2),
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
    # permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):
        try:
            token = request.COOKIES.get('jwt')
            if token is None:
                raise AuthenticationFailed('Unauthenticated')
            data = jwt.decode(token, 'secret', algorithms="HS256")
            user    = CustomUser.objects.get(id=data['id'])
            if user:
                return Response({
                    'message': "success",
                    'data': "mydata"
                })
            #koi return nahi milega tw except chalega
                
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token has expired')
        except jwt.DecodeError:
            raise AuthenticationFailed('Token is invalid')

