import jwt
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser

def JWT_Authentication(view_function):
    # @wraps(view_function)
    def wrapper(self,request, *args, **kwargs):
        print("wrapping the function with the wrapper  ")
        try:
            token = request.COOKIES.get('jwt')
            print(token)
            if token is None:
                raise AuthenticationFailed('Unauthenticated')
            data         = jwt.decode(token, 'secret', algorithms="HS256")
            user         = CustomUser.objects.get(id=data['id'])
            request.user = user
            print(user, "request.user", request.user)
                
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token is expired')
        except jwt.DecodeError:
            raise AuthenticationFailed('Token is invalid')
        except CustomUser.DoesNotExist:
            raise AuthenticationFailed('User does not Exist')
        
        #  calling the view function
        print("calling the actual view")
        return view_function(self, request, *args,  **kwargs)
    return wrapper