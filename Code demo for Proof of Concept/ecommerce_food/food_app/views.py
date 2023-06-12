from django.shortcuts import render
from .models import Food

def search(request):
    query = request.GET.get('q', '')
    if query:
        results = Food.objects.filter(name__icontains=query) | Food.objects.filter(category__icontains=query)
    else:
        results = Food.objects.none()

    context = {
        'foods': results,
    }

    return render(request, 'search.html', context)
