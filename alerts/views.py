from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AlertSerializer
from .models import Alert

# Create your views here.
class AlertView(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer
