from django.db import models

class ContohModel(models.Model):
    nama = models.CharField(max_length=100)
