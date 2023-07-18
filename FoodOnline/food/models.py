from django.db import models

# Create your models here.

class Pizza(models.Model):
    name    = models.CharField(max_length=120)
    priceM  = models.DecimalField(max_digits=8, decimal_places=3)
    priceL  = models.DecimalField(max_digits=8, decimal_places=3)
    pImage  = models.URLField()
    

class Burger(models.Model):
    name    = models.CharField(max_length=120)
    priceM  = models.DecimalField(max_digits=8, decimal_places=3)
    priceL  = models.DecimalField(max_digits=8, decimal_places=3)
    bImage  = models.URLField()
    

class Rice(models.Model):
    name = models.CharField(max_length=120)
    priceM = models.DecimalField(max_digits=8, decimal_places=3)
    priceL = models.DecimalField(max_digits=8, decimal_places=3)
    rImage = models.URLField()
