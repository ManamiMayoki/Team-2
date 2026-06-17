from rest_framework import serializers
from .models import Dood

class DoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dood
        fields = '__all__'