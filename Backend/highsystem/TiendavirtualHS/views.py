from django.shortcuts import render, get_object_or_404

# Create your views here.
from .serializers import CarritoSerializer, BebidasSerializer, CategoriaSerializer, PedidoSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated, DjangoModelPermissions
from .models import Categoria, Bebidas, Carrito, Pedido
from rest_framework import viewsets
import mercadopago
import json
from rest_framework.response import Response
from rest_framework.views import APIView


class CategoriaModelView(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class verCarrito(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Carrito.objects.all()
    serializer_class = CarritoSerializer

class verPedido(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer


class BebidaModelView(viewsets.ModelViewSet):
    serializer_class = BebidasSerializer
    queryset = Bebidas.objects.all()
    permission_classes = [IsAuthenticated, DjangoModelPermissions]

    def get_permissions(self):
        if self.action in ('list'):
            permission_classes = [AllowAny]
        elif self.action in ('create', 'update', 'partial_update', 'destroy'):
            permission_classes = [IsAuthenticated, DjangoModelPermissions]
        else:
            permission_classes = [IsAuthenticated, DjangoModelPermissions]
        return [permission() for permission in permission_classes]

class ProcessPaymentAPIView(APIView):
    def post(self, request):
        try:
            request_values = json.loads(request.body)
            payment_data = {
                "transaction_amount": float(request_values["transaction_amount"]),
                "token": request_values["token"],
                "installments": int(request_values["installments"]),
                "payment_method_id": request_values["payment_method_id"],
                "issuer_id": request_values["issuer_id"],
                "payer": {
                    "email": request_values["payer"]["email"],
                    "identification": {
                        "type": request_values["payer"]["identification"]["type"],
                        "number": request_values["payer"]["identification"]["number"],
                    },
                },
            }

            sdk = mercadopago.SDK("")

            payment_response = sdk.payment().create(payment_data)

            payment = payment_response["response"]
            status = {
                "id": payment["id"],
                "status": payment["status"],
                "status_detail": payment["status_detail"],
            }

            return Response(data={"body": status, "statusCode": payment_response["status"]}, status=201)
        except Exception as e:
            return Response(data={"body": payment_response}, status=400)

class retornarPagado(APIView):  # Retornar custom json 
    def get(self, request):
        return Response({"respuesta": "aprobado"})

class customjsonybajarstock(APIView):
    #permission_classes = [IsAdminUser] #Solo permito admins.
    permission_classes = [AllowAny] 
    def patch(self, request, pk, cantidad): #Utilizo patch para la modificacion parcial.
        model = get_object_or_404(Bebidas, pk=pk) #Pido el objeto mandandole el ID. 
        data = {"cantidad": model.cantidad - int(cantidad)} #Del json, le resto la cantidad.
        serializer = BebidasSerializer(model, data=data, partial=True) #Paso la data al serializer.

        if serializer.is_valid(): #Si es valido lo que mande
            serializer.save() #Guardo el response (va a mandar el json del producto con la cantidad actualizada)
            agregarcustomjson={"respuesta": "aprobado"}
            agregarcustomjson.update(serializer.data)  #A ese json anterior, le agrego la respuesta de la transaccion.
            return Response(agregarcustomjson)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CarritoVista(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = CarritoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"estado": "correcto", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"estado": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)