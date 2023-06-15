from django.urls import path, include
from .views import LoginView, LogoutView, SignupView, ProfileView, ListarUsuarios

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

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

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]