import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

      products: any = [];
      navActive = 'list-products'
      constructor(
        private productsService: ProductsService,
        private snackBar: MatSnackBar,

      ) { }

      ngOnInit(): void {
        this.productsService.getProducts()
          .subscribe((data) => {
            this.products = data;
          });
      }

      deleteProduct(id: number) {
        console.log("BORRADO DE PRODUCTO: " + id);
        this.productsService.deleteProduct(id)
        .subscribe(
            (data) => {
              this.snackBar.open('Producto eliminado', 'Cerrar', {
                duration: 3000,
              });
              this.products.forEach((element: any, index: number) => {
                if (element.id_bebidas === id) {
                  this.products.splice(index, 1);
                }
              }
              );
            }
          );

      }

}
