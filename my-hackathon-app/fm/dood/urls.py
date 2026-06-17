from django.contrib import admin
from django.urls import path
from dood.views import DoodListCreateView


urlpatterns = [
    path('data/', DoodListCreateView.as_view(), name='dood-list-create'),
]