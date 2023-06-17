from django.shortcuts import render

# Create your views here.
from .serializers import CarritoSerializer, BebidasSerializer, CategoriaSerializer, PedidoSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated, DjangoModelPermissions
from .models import Categoria, Bebidas, Carrito, Pedido
from rest_framework import viewsets



class CategoriaModelView(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class verCarrito(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Carrito.objects.all()
    serializer_class = CarritoSerializer

class verPedido(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer


class BebidaModelView(viewsets.ModelViewSet):
    serializer_class = BebidasSerializer
    queryset = Bebidas.objects.all()
    permission_classes = [IsAuthenticated, DjangoModelPermissions]

    def get_permissions(self):
        if self.action in ('list'):
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated, DjangoModelPermissions]
        return [permission() for permission in permission_classes]
