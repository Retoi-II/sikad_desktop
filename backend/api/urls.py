# aplikasi_backend/urls.py
from django.urls import path
from .views import data_view

urlpatterns = [
    path('api/data/', data_view, name='data-view'),
]
