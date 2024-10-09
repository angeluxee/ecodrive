from rest_framework import serializers
from .models import Alert
# Create 
class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        # fields = ('id', 'brand', 'model')
        fields = '__all__'