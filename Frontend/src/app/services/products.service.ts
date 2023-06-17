import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product,AddProductDto } from '../models/product.model';
import { TokenService } from './token.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url_api = 'http://localhost:8000/';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getProducts() {
    return this.http.get<Product>(this.url_api + '/api/tienda/bebida/');
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken() || ''
    })
  };

  addProduct(name: string, price: number, category: string, code: string, image: any, stock?: number) {
    const payload = {
      marca: name,
      precio: price,
      id_categoria: category,
      codigo: code,
      imagen: image,
      stock: stock
    };

    return this.http.post<AddProductDto>(this.url_api + '/api/tienda/bebida/', payload, this.httpOptions);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url_api + '/api/tienda/bebida/' + id, this.httpOptions);
  }

  updateProduct(id?: number, name?: string, price?: number, category?: string, code?: string, image?: any, stock?: number) {
    const payload = {
      marca: name,
      precio: price,
      id_categoria: category,
      codigo: code,
      imagen: image,
      stock: stock
    };

    return this.http.patch(this.url_api + '/api/tienda/bebida/' + id, payload, this.httpOptions);
  }


}
