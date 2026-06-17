from django.views import generic
from rest_framework import generics
from .models import Dood
from .serializers import DoodSerializer

class DoodListCreateView(generics.ListCreateAPIView):
    queryset = Dood.objects.all()
    serializer_class = DoodSerializer   

# Create your views here.
