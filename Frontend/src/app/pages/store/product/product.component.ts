import { Component,Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {
    id_bebidas: 0,
    precio: 0,
    imagen: '',
    marca: '',
    id_categoria:'',
    descripcion: '',
    stock: 0,
    codigo: '',
  };

}
