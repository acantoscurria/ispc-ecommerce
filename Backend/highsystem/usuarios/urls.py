from django.urls import path, include
# from .views import LoginView, LogoutView, SignupView, ProfileView, ListarUsuarios

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from .views import UserModelViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(prefix='usuarios', viewset=UserModelViewSet,basename='usuarios')

urlpatterns = [
    # Manejo de usuarios
    # JWT views
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('', include(router.urls)),

]