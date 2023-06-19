<<<<<<< HEAD:Backend/entorno/ecommerce/Scripts/highsystem/TiendavirtualHS/urls.py
from django.urls import path, include
from .views import LoginView, LogoutView, SignupView

urlpatterns = [
    # Auth views
    path('auth/login/',
         LoginView.as_view(), name='auth_login'),

    path('auth/logout/',
         LogoutView.as_view(), name='auth_logout'),

    path('auth/SignupView/',
         SignupView.as_view(), name='auth_signup'),
=======
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
         
>>>>>>> JuanLedesma:Backend/highsystem/TiendavirtualHS/urls.py
]