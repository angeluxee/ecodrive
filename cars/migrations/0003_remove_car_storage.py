# Generated by Django 5.1.1 on 2024-10-03 15:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0002_remove_car_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='storage',
        ),
    ]
