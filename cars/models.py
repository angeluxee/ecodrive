from django.db import models

class Car(models.Model):
    BRAND_CHOICES = [
        ('Ford', 'Ford'),
        ('BMW', 'BMW'),
        ('Audi', 'Audi'),
        ('Toyota', 'Toyota'),
        ('Mercedes', 'Mercedes'),
        ('Volkswagen', 'Volkswagen'),
        ('Honda', 'Honda'),
        ('Chevrolet', 'Chevrolet'),
        ('Hyundai', 'Hyundai'),
        ('Nissan', 'Nissan'),
        ('Kia', 'Kia'),
        ('Peugeot', 'Peugeot'),
        ('Renault', 'Renault'),
        ('Volvo', 'Volvo'),
        ('Tesla', 'Tesla'),
        ('Lexus', 'Lexus'),
        ('Mazda', 'Mazda'),
        ('Subaru', 'Subaru'),
        ('Jaguar', 'Jaguar'),
        ('Ferrari', 'Ferrari'),
        ('Porsche', 'Porsche'),
        ('Lamborghini', 'Lamborghini'),
        ('Land Rover', 'Land Rover'),
    ]

    LOCATION_CHOICES = [
        ('Barcelona', 'Barcelona'),
        ('Madrid', 'Madrid'),
        ('Valencia', 'Valencia'),
    ]
    # Información básica del coche
    brand = models.CharField(max_length=100, choices=BRAND_CHOICES) 
    model = models.CharField(max_length=100) 
    year = models.PositiveIntegerField() 
    description = models.TextField(blank=True) 
    type = models.CharField(max_length=10, choices=[('Car', 'Car'), ('Van', 'Van'), ('Scooter', 'Scooter')], default='Car')
    # image = models.ImageField(upload_to='cars/', null=True, blank=True)  
    plate_number = models.CharField(max_length=15, unique=True)  
    seats = models.PositiveIntegerField()  
    transmission_type = models.CharField(max_length=10, choices=[('Automatic', 'Automatic'), ('Manual', 'Manual')]) 

    # Información sobre el alquiler
    price_per_day = models.DecimalField(max_digits=8, decimal_places=2)  
    is_available = models.BooleanField(default=True)  
    location = models.CharField(max_length=50, choices=LOCATION_CHOICES)  

    # Información sobre las características del coche
    fuel_type = models.CharField(max_length=20, choices=[('Gasoline', 'Gasoline'), ('Diesel', 'Diesel'), ('Electric', 'Electric'), ('Hybrid', 'Hybrid')])  
    mileage = models.PositiveIntegerField() 
    doors = models.PositiveIntegerField()  
    storage = models.PositiveBigIntegerField(default=0)
    air_conditioning = models.BooleanField(default=True)
    gps = models.BooleanField(default=False)  
    bluetooth = models.BooleanField(default=False)  
    parking_sensors = models.BooleanField(default=False)  

    # Información de registro
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True) 

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year}) - {self.plate_number}"
