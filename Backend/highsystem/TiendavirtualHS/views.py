from django.shortcuts import render

# Create your views here.
from django.contrib.auth import authenticate, login, logout 
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CarritoSerializer, BebidasSerializer, CategoriaSerializer, PedidoSerializer
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import Categoria, Bebidas, Carrito, Pedido
from rest_framework import viewsets


class verBebidas(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Bebidas.objects.all()
    serializer_class = BebidasSerializer

class verCategorias(viewsets.ReadOnlyModelViewSet):
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

class agregarBebidas(APIView):
    permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = BebidasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                        status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

