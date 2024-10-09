from rest_framework import serializers
from .models import Car
# Create 
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        # fields = ('id', 'brand', 'model')
        fields = '__all__'