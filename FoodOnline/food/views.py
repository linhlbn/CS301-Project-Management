from django.shortcuts import render

from django.http import HttpResponse

from .models import Pizza, Burger

# Create your views here.


def index(request):
    return render(request, 'food/index.html')

def pizza(request):
    pizzas = Pizza.objects.all()
    ctx = {'pizzas': pizzas}
    return render(request, 'food/pizza.html', ctx)

def burger(request):
    burgers = Burger.objects.all()
    ctx = {'burgers': burgers}
    return render(request, 'food/burger.html', ctx)