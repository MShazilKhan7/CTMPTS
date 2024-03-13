from django.urls import path
from .views import RegisterUser, LoginUser, TokenVerification

urlpatterns = [
    path('auth/signup',  RegisterUser.as_view()),
    path('auth/login',  LoginUser.as_view()),
    path('auth/verify-token',  TokenVerification.as_view()),
]
