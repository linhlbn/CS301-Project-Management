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



class Product(models.Model):
    SIZE_CHOICES = [
        ('M', 'Medium'),
        ('L', 'Large'),
    ]
    CATEGORY_CHOICES = [
        ('Pizza', 'Pizza'),
        ('Burger', 'Burger'),
        ('Rice', 'Rice'),
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES)
    size = models.CharField(max_length=1, choices=SIZE_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', blank=True)








    # def __str__(self):
    #     return self.name
