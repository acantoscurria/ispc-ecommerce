from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
<<<<<<< HEAD:Backend/entorno/ecommerce/Scripts/highsystem/TiendavirtualHS/serializers.py
=======
from .models import Pedido, Carrito, Bebidas, Categoria
from drf_extra_fields.fields import Base64ImageField

>>>>>>> JuanLedesma:Backend/highsystem/TiendavirtualHS/serializers.py

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True)
    username = serializers.CharField(
        required=True)
    password = serializers.CharField(
        min_length=8)

    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password')
    def validate_password(self, value):
<<<<<<< HEAD:Backend/entorno/ecommerce/Scripts/highsystem/TiendavirtualHS/serializers.py
        return make_password(value)
=======
        return make_password(value)

class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields = '__all__'

class BebidasSerializer(serializers.ModelSerializer):
    imagen = Base64ImageField(required=False)

    class Meta:
        model = Bebidas
        fields = '__all__'


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'


class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = '__all__'

>>>>>>> JuanLedesma:Backend/highsystem/TiendavirtualHS/serializers.py
