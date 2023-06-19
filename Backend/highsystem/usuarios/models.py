from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password
from django.conf import settings


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']


class Cliente(models.Model):
    id_cliente = models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    password = models.CharField(max_length=128, default='my_default_password')
    telefono = models.CharField(max_length=45, null=True,editable=True)
    direccion = models.TextField(blank=False, editable=True)

    class meta:
        db_table="Cliente"
        verbose_name= "Tipo de usuario cliente"
        verbose_name_plural= "Clientes"


class Administrador(models.Model):
    id_administrador=models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    class meta:
        db_table="Administrador"
        verbose_name= "Tipo de usuario administrador"
        verbose_name_plural= "Administradores"

    
