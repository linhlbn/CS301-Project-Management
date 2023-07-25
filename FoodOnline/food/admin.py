from django.contrib import admin
from .models import Pizza, Burger, Rice, Product
# Register your models here.


class PizzaAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')
    
    
admin.site.register(Pizza, PizzaAdmin)


class BurgerAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')
    
    
admin.site.register(Burger, BurgerAdmin)

class RiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')

admin.site.register(Rice, RiceAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'category', 'size', 'price')

admin.site.register(Product, ProductAdmin)




from django.contrib import admin
admin.site.site_header = "Welcome to Food Administration!"
admin.site.index_title = "Main Dashboard"
admin.site.site_title = "Food Admin Dashboard"