from django.utils import timezone
from django.db import models
from cars.models import Car

class ReservationManager(models.Manager):
    def is_car_available(self, car, pick_up_datetime, return_datetime):
        # Verifica si el coche está disponible en las fechas proporcionadas
        overlapping_reservations = Reservation.objects.filter(
            car=car,
            pick_up_datetime__lt=return_datetime,
            return_datetime__gt=pick_up_datetime,
        )
        return not overlapping_reservations.exists()

# Asigna el manager personalizado al modelo
class Reservation(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    pick_up_datetime = models.DateTimeField()
    return_datetime = models.DateTimeField()

    objects = ReservationManager()
