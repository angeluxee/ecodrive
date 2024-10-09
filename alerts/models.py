from django.db import models

# Create your models here.
class Alert(models.Model):
    # Información de la alerta
    # user_id = 
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.PositiveBigIntegerField()
    # Información de registro
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True) 



    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"
