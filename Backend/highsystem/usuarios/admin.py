from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from .models import Cliente, Administrador

# Register your models here.
@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass


class ClienteAdmin(admin.ModelAdmin):
    list_display = ('id_cliente', 'password', 'telefono', 'direccion')

class AdministradorAdmin(admin.ModelAdmin):
    list_display = ('id_administrador', 'id_usuario')



admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Administrador, AdministradorAdmin)