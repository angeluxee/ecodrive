from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Create 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}  # Para que la contraseña no se muestre en las respuestas

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])  # Encriptar la contraseña
        user.save()
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        # Usar el modelo personalizado de usuario para generar el token
        token = super().get_token(user)
        
        # Añadir información adicional en el token si lo necesitas
        token['name'] = user.first_name
        token['surname'] = user.last_name
        return token
    
    def validate(self, attrs):
        try:
            user = User.objects.get(email=attrs['email'])  # Usa tu modelo personalizado
            if not user.check_password(attrs['password']):
                raise Exception("Password incorrecto")
            
            data = super().validate(attrs)
            refresh = self.get_token(user)
            data['refresh'] = str(refresh)
            data['access'] = str(refresh.access_token)
            return data
        except User.DoesNotExist:
            raise Exception("User not found")
