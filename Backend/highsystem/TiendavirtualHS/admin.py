from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
<<<<<<< HEAD:Backend/entorno/ecommerce/Scripts/highsystem/TiendavirtualHS/admin.py
from .models import  Cliente, Carrito, Categoria, Bebidas, Pedido, Administrador


@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('id_cliente', 'password', 'telefono', 'direccion')

class AdministradorAdmin(admin.ModelAdmin):
    list_display = ('id_administrador', 'id_usuario')
=======
from .models import  Carrito, Categoria, Bebidas, Pedido


>>>>>>> JuanLedesma:Backend/highsystem/TiendavirtualHS/admin.py

class CarritoAdmin(admin.ModelAdmin):
    list_display = ("id_carrito", "id_cliente", "monto", "cantidad", "medio_pago")

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("id_categoria", "nombre_categoria")

class BebidasAdmin(admin.ModelAdmin):
    list_display = ("id_bebidas", "marca", "stock", "precio", "id_categoria","imagen","descripcion")

class PedidoAdmin(admin.ModelAdmin):
    list_display = ("id_pedido", "id_bebidas", "id_carrito", "fecha", "numero_factura")


<<<<<<< HEAD:Backend/entorno/ecommerce/Scripts/highsystem/TiendavirtualHS/admin.py
admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Administrador, AdministradorAdmin)
=======

>>>>>>> JuanLedesma:Backend/highsystem/TiendavirtualHS/admin.py
admin.site.register(Carrito, CarritoAdmin)
admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Bebidas, BebidasAdmin)
admin.site.register(Pedido, PedidoAdmin)
