import { Component,Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any = {
    id: 0,
    precio: 0,
    imagen: '',
    nombre: '',
    categoria:'',
    descripcion: '',
    stock: 0,
  };

}
