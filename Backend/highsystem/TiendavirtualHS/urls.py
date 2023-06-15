from django.urls import path
from .views import agregarBebidas
from rest_framework import routers
from TiendavirtualHS import views as vistas
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('bebidas', vistas.verBebidas, basename='Bebidas')
router.register('categorias', vistas.verCategorias, basename='Categoria')
router.register('carrito', vistas.verCarrito, basename='Carrito')
router.register('pedidos', vistas.verPedido, basename='Pedido')

urlpatterns = [
    # Auth views

     path('agregarproducto/',
         agregarBebidas.as_view(), name='agregar_Bebidas'),
    path('', include(router.urls)),
         
]