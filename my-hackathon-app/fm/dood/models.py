from django.db import models


class Dood(models.Model):
    name = models.CharField(max_length=100)
    department=models.CharField(max_length=100)
    batch=models.CharField(max_length=100)
    gender=models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Create your models here.
