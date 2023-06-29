from django.urls import path

from . import views

app_name = 'food'

urlpatterns = [
    path('pizza', views.pizza, name='pizzas'),
    path('burger', views.burger, name='burgers'),
]