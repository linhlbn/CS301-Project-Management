from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Pizza, Burger, Rice, Product
from django.views.decorators.csrf import csrf_exempt

from django.urls import reverse

from .forms import NewUserForm

# from .forms import LoginForm

from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


from itertools import chain



from django.db.models import Q
# from .models import 

def index(request):
    request.session.set_expiry(0)
    return render(request, 'food/index.html')

def pizza(request):
    request.session.set_expiry(0)
    pizzas = Pizza.objects.all()
    ctx = {'pizzas': pizzas}
    return render(request, 'food/pizza.html', ctx)

def burger(request):
    request.session.set_expiry(0)
    burgers = Burger.objects.all()
    ctx = {'burgers': burgers}
    return render(request, 'food/burger.html', ctx)

def rice(request):
    request.session.set_expiry(0)
    rices = Rice.objects.all()
    ctx = {'rices': rices}
    return render(request, 'food/rice.html', ctx)

from django.http import JsonResponse
def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'


import json

@csrf_exempt
def order(request):
    request.session.set_expiry(0)
    if is_ajax(request=request):
        request.session['note'] = request.POST.get('note')
        order_items_str = request.POST.get('order')
        order_items = json.loads(order_items_str)
        request.session['order_items'] = order_items

        total = sum(float(item[2]) for item in order_items)
        request.session['total'] = total

    return render(request, 'food/order.html')


def success(request):
    order_items = request.session.get('order_items', [])
    note = request.session.get('note', '')
    total = request.session.get('total', 0.00)
    ctx = {
        'order_items': order_items,
        'note': note,
        'total': total
    }
    return render(request, 'food/success.html', ctx)



 
from django.contrib import messages

def signup(request):
    if request.method == 'POST':
        form = NewUserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f"Welcome {username}! Login and happy shopping")
            return HttpResponseRedirect(reverse('index'))
    else:
        form = NewUserForm()
    
    context = {'form': form}
    return render(request, 'food/signup.html', context)




def logIn(request):
    ctx = {
        
    }
    if request.POST:
        username = request.POST.get('username')
        pwd = request.POST.get('password')
        user = authenticate(request=request, username=username, password=pwd)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('index'))
        else:
            messages.info(request, "username or password are not correct")
    
    
    return render(request, 'food/login.html', ctx)

def logOut(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))
    
    
# from .models import Item
# from items.models import Item




def searchedresult(request):
    query = request.GET.get('q')
    category = request.GET.get('category')
    size = request.GET.get('size')

    all_products = Product.objects.all()

    if category == "all" and size == "all":
        queries = query.split(" ")
        search_results = []
        for product in all_products:
            if any(query_word.lower() in product.name.lower() or query_word.lower() in product.description.lower() for query_word in queries):
                search_results.append(product)
    elif category != "all" and size == "all":
        queries = query.split(" ")
        search_results = []
        for product in all_products:
            if product.category.lower() == category.lower() and any(query_word.lower() in product.name.lower() or query_word.lower() in product.description.lower() for query_word in queries):
                search_results.append(product)
    elif category == "all" and size != "all":
        queries = query.split(" ")
        search_results = []
        for product in all_products:
            if product.size.lower() == size.lower() and any(query_word.lower() in product.name.lower() or query_word.lower() in product.description.lower() for query_word in queries):
                search_results.append(product)
    else:
        queries = query.split(" ")
        search_results = []
        for product in all_products:
            if product.category.lower() == category.lower() and product.size.lower() == size.lower() and any(query_word.lower() in product.name.lower() or query_word.lower() in product.description.lower() for query_word in queries):
                search_results.append(product)

    return render(request, 'food/searchedresult.html', {'search_results': search_results})





