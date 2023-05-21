import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    products: any[] = [];

    constructor(
      private productsService: ProductsService
    ) { }

    ngOnInit(): void {
      this.productsService.getProducts()
        .subscribe((data: any) => {
          this.products = data;
        });
    }

}
