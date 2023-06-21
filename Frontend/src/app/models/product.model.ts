
export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id_bebidas: number;
  marca: string;
  precio: number;
  descripcion: string;
  id_categoria: string;
  imagen: any;
  stock: number;
  codigo: string;
}

export interface AddProductDto extends Omit < Product, 'id' >{} ;


