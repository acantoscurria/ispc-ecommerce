from django.contrib import admin
from .models import Usuario, Cliente, Administrador, Carrito, Categoria, Bebidas, Pedido

# Register your models here.

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ("id_usuario", "nombre", "email")

class ClienteAdmin(admin.ModelAdmin):
    list_display = ("id_cliente", "id_usuario", "nom_usu", "telefono", "direccion")

class AdministradorAdmin(admin.ModelAdmin):
    list_display = ("id_administrador", "id_usuario")

class CarritoAdmin(admin.ModelAdmin):
    list_display = ("id_carrito", "id_cliente", "monto", "cantidad", "medio_pago")

class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("id_categoria", "nombre_categoria")

class BebidasAdmin(admin.ModelAdmin):
    list_display = ("id_bebidas", "marca", "stock", "precio", "id_categoria","imagen","descripcion")

class PedidoAdmin(admin.ModelAdmin):
    list_display = ("id_pedido", "id_bebidas", "id_carrito", "fecha", "numero_factura")

admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Administrador, AdministradorAdmin)
admin.site.register(Carrito, CarritoAdmin)
admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Bebidas, BebidasAdmin)
admin.site.register(Pedido, PedidoAdmin)
