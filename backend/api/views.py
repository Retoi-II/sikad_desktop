# aplikasi_backend/views.py
from django.shortcuts import render
from django.http import JsonResponse
from .models import ContohModel

def data_view(request):
    # Mengambil semua objek dari model ContohModel
    data_objects = ContohModel.objects.all()

    # Mengonversi objek menjadi format yang dapat di-serialize (contoh: nama saja)
    serialized_data = [{'nama': obj.nama} for obj in data_objects]

    # Mengembalikan respons JSON
    return JsonResponse(serialized_data, safe=False)
