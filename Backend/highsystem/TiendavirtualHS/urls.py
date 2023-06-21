from django.urls import path
from rest_framework import routers
from TiendavirtualHS import views as vistas
from django.conf.urls import include
from .views import customjsonybajarstock, retornarPagado,CarritoVista


router = routers.SimpleRouter()
router.register('categoria', vistas.CategoriaModelView, basename='Categoria')
router.register('carrito', vistas.verCarrito, basename='Carrito')
router.register('pedidos', vistas.verPedido, basename='Pedido')
router.register('bebida', vistas.BebidaModelView, basename='bebida')


urlpatterns = [
    # Auth views

    path('', include(router.urls)),
    path('retornarPagado/', retornarPagado.as_view(), name='retornarPagado'),
    path('actualizarstock/<int:pk>/<int:cantidad>', customjsonybajarstock.as_view(), name='customjsonybajarstock'), #
    path('carrito/', CarritoVista.as_view(), name='carritodecompras'),
]         
