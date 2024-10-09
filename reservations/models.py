from django.db import models
from accounts.models import User
from cars.models import Car

class Reservation(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Si usas un sistema de autenticación
    pick_up_datetime = models.DateTimeField()
    return_datetime = models.DateTimeField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Reserva de {self.car} desde {self.pick_up_datetime} hasta {self.return_datetime}"
