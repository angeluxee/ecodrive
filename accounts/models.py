from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = models.CharField(max_length=50, unique=False)
    first_name = models.CharField(max_length=30, blank=False, default='')  
    last_name = models.CharField(max_length=30, blank=False, default='') 
    email = models.EmailField(unique=True, blank=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email})"