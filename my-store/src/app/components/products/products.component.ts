import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [
    {
      id: "1",
      name:"Pack de latas Quilmes",
      price: 1800,
      image: "./assets/images/bulto-lata-quilmes.jpg"
    },
    {
      id: "2",
      name:"Pack de latas Schneider",
      price: 1700,
      image: "./assets/images/bulto-lata-schneider-x-710cc.jpg"
    },
    {
      id:"3",
      name:"Pack de Schweppes",
      price: 4100,
      image: "./assets/images/bulto-schweppes.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price,0);
  }

}
