from django.urls import path, include
from .views import LoginView, LogoutView, SignupView, ProfileView, ListarUsuarios, agregarBebidas, customjsonybajarstock, retornarPagado

urlpatterns = [
    # Auth views
    path('auth/login/',
         LoginView.as_view(), name='auth_login'),

    path('auth/logout/',
         LogoutView.as_view(), name='auth_logout'),

    path('auth/SignupView/',
         SignupView.as_view(), name='auth_signup'),

     path('auth/reset/',
         include('django_rest_passwordreset.urls',
                 namespace='password_reset')),

     path('user/profile/',
         ProfileView.as_view(), name='user_profile'),

     path('usuarios/',
         ListarUsuarios.as_view(), name='listar_usuarios'),

     path('agregarproducto/',
         agregarBebidas.as_view(), name='agregar_Bebidas'),

     path('retornarPagado/',
         retornarPagado.as_view(), name='retornarPagado'),

     path('actualizarstock/<int:pk>/<int:cantidad>', customjsonybajarstock.as_view(), name='customjsonybajarstock'),
]