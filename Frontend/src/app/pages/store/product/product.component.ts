import { Component,Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    price: 0,
    image: '',
    title: '',
    category:'',
    description: '',
    rating: {
      count: 0,
      rate: 0
    }
  };

}
