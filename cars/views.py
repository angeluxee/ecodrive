from rest_framework import viewsets  
from rest_framework.generics import ListAPIView
from .models import Car
from .serializers import CarSerializer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

class CarView(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class FilteredCarListView(ListAPIView):
    serializer_class = CarSerializer
    queryset = Car.objects.all()
    
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['location', 'type']  

