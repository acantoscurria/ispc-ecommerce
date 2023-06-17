import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  navActive = 'add-product'
  addProductForm: FormGroup;
  imgeToSend: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private snackBar: MatSnackBar,

  ) {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      code: ['', Validators.required],
      image: ['', ''],
      stock: ['', Validators.required],
    });
    this.imgeToSend = null;
  }


  get name() {
    return this.addProductForm.get('name')
  }

  get price() {
    return this.addProductForm.get('price')
  }

  get category() {
    return this.addProductForm.get('category')
  }

  get code() {
    return this.addProductForm.get('code')
  }

  get stock() {
    return this.addProductForm.get('stock')
  }

  get image() {
    return this.addProductForm.get('image')
  }

  imgChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      // Continúa con el procesamiento del archivo aquí

      const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(',')[1] || '';
      // Aquí tienes el contenido de la imagen en base64 sin información adicional
      console.log("IMAGEN EN BASE64: " + base64String);
      this.imgeToSend = base64String;
    };
    reader.readAsDataURL(file);

      console.log("IMAGEN GUARDADA " + this.imgeToSend)
    }

  }

  addProduct() {
    if (this.addProductForm.invalid) {
      return;
    }

    const name = this.addProductForm.get('name')?.value;
    const price = this.addProductForm.get('price')?.value;
    const category = this.addProductForm.get('category')?.value;
    const code = this.addProductForm.get('code')?.value;
    var image = this.imgeToSend;
    const stock = this.addProductForm.get('stock')?.value;


    if (name && price && category && code && stock) {
      console.log("IMAGEN ENVIADA " + image);
      this.productService.addProduct(name, price, category, code, image, stock)
        .pipe(
          catchError((error) => {
            console.log(error);
            this.snackBar.open('Error al agregar producto', 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'bottom',
              panelClass: 'error-snackbar'
            });
            return of(null);
          }
          )
        )
        .subscribe((data) => {
          if (data) {
            console.log(data);
            this.snackBar.open('Producto agregado exitosamente', 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'bottom',
              panelClass: 'success-snackbar'
            });
          }
        }
        );
    }
  }

}

