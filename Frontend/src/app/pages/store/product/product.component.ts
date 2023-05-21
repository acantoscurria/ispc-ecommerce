import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any = {
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description: ''
  };

}
