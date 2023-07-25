from .models import Product

def categories(request):
    categories = Product.objects.values_list('category', flat=True).distinct()
    return {'categories': categories}

def sizes(request):
    sizes = Product.SIZE_CHOICES
    return {'sizes': sizes}
