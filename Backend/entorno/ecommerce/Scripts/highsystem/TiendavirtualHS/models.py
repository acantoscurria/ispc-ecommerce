from django.db import models
from django.contrib.auth.hashers import make_password
from django.db.models import Max
# Create your models here.

class Usuario(models.Model):
    id_usuario= models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=40,blank=False)
    email = models.EmailField(max_length=100, blank=False, editable=True)
    clave = models.CharField(max_length=8, blank=False, editable=True)

    class meta:
        db_table="Usuario"
        verbose_name= "Usuarios disponibles"
        verbose_name_plural= "Usuarios"

    def save(self, *args, **kwargs):
        self.clave = make_password(self.clave)
        super().save(*args, **kwargs)


class Cliente(models.Model):
    id_cliente=models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    nom_usu = models.CharField(max_length=255)
    telefono = models.CharField(max_length=45, null=True,editable=True)
    direccion = models.TextField(blank=False, editable=True)
    
    class meta:
        db_table="Cliente"
        verbose_name= "Tipo de usuario cliente"
        verbose_name_plural= "Clientes"

class Administrador(models.Model):
    id_administrador=models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    class meta:
        db_table="Administrador"
        verbose_name= "Tipo de usuario administrador"
        verbose_name_plural= "Administradores"

class Carrito(models.Model):
    id_carrito= models.AutoField(primary_key=True)
    id_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.IntegerField(editable=True)
    medio_pago = models.CharField(max_length=45, blank=False, editable=True)

    class meta:
        db_table="Carrito"
        verbose_name= "Carrito de compra"
        verbose_name_plural= "Carritos"

class Categoria(models.Model):
    id_categoria= models.AutoField(primary_key=True)
    nombre_categoria = models.CharField(max_length=50, blank=False, editable=True)

    class meta:
        db_table="Categoria"
        verbose_name= "Categoria de bebidas"
        verbose_name_plural= "Categorias"

    def __unicode__ (self):
        return self.nombre_categoria
    def __str__(self):
        return self.nombre_categoria

class Bebidas(models.Model):
    id_bebidas= models.AutoField(primary_key=True)
    marca = models.CharField(max_length=45, blank=False, editable=True)
    stock = models.IntegerField(blank= False, editable=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2, blank= False, editable=True )
    id_categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    imagen = models.ImageField(null=True, blank=True, upload_to="bebidas/", editable=True)
    descripcion = models.TextField(null=True, blank= True, editable=True)

    class meta:
        db_table="Bebidas"
        verbose_name= "Producto bebida"
        verbose_name_plural= "Bebidas"

class Pedido(models.Model):
    id_pedido= models.AutoField(primary_key=True)
    id_bebidas = models.ForeignKey(Bebidas, on_delete=models.CASCADE)
    id_carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True, null=True, blank=True)
    numero_factura = models.IntegerField(unique=True, null=False, blank=False)

    def save(self, *args, **kwargs):
        if not self.pk:  
            last_pedido = Pedido.objects.order_by('-numero_factura').first()
            if last_pedido:
                self.numero_factura = last_pedido.numero_factura + 1
            else:
                self.numero_factura = 1
        super().save(*args, **kwargs)

    @property
    def numero_factura_consecutivo(self):
        return str(self.numero_factura).zfill(6)

    class meta:
        db_table="Pedido"
        verbose_name= "Pedido de bebidas"
        verbose_name_plural= "Pedidos"