# Generated by Django 5.1.1 on 2024-10-03 15:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0004_remove_car_air_conditioning'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='gps',
        ),
    ]
