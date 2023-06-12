from django.db import models

# Create your models here.

class Food(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.URLField(max_length=200)

    def __str__(self):
        return self.name