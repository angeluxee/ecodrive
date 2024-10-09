from rest_framework import viewsets, generics, status
from .serializers import UserSerializer
from .models import User
from rest_framework.views import APIView
from .backends import UserBackend
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from .serializers import CustomTokenObtainPairSerializer, UserRegisterSerializer

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user  # El usuario se obtiene automáticamente si el token es válido
        user_data = {
            "username": user.username,
            "email": user.email,
            # Agrega más campos según sea necesario
        }
        return Response(user_data, status=200)
    
class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"user_id": user.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Tokens 
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class VerifyTokenView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"valid": True}, status=200)