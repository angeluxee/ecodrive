from django.contrib.auth.backends import BaseBackend
from .models import User  
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class UserBackend(BaseBackend):
    def auth(self, request, username=None, password=None):
        try:
            user = User.objects.get(username = username)
            print(type(user.password))
            print((password))
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None
        
class UserInfoView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user  # El usuario autenticado
        return Response({
            "username": user.username,
            "email": user.email,
        })