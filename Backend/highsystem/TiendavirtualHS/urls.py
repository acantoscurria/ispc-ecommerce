from django.urls import path
from rest_framework import routers
from TiendavirtualHS import views as vistas
from django.conf.urls import include


router = routers.SimpleRouter()
router.register('categoria', vistas.CategoriaModelView, basename='Categoria')
router.register('carrito', vistas.verCarrito, basename='Carrito')
router.register('pedidos', vistas.verPedido, basename='Pedido')
router.register('bebida', vistas.BebidaModelView, basename='bebida')


urlpatterns = [
    # Auth views

    path('', include(router.urls)),
         
]