import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product[] = [
    {
      name:"Pack de latas Quilmes",
      price: 1800,
      image: "./assets/images/bulto-lata-quilmes.jpg"
    },
    {
      name:"Pack de latas Schneider",
      price: 1700,
      image: "./assets/images/bulto-lata-schneider-x-710cc.jpg"
    },
    {
      name:"Pack de Schweppes",
      price: 4100,
      image: "./assets/images/bulto-schweppes.jpg"
    }
  ]

}
