
export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: any;
  stock: number;
}

export interface AddProductDto extends Omit < Product, 'id' >{} ;


