from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    account_number = models.CharField(max_length=20, unique=True)
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.username
