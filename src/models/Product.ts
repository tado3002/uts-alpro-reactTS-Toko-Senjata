export interface Product {
  name: string;
  price: number;
  image: string;
}
export interface ProductListProps {
  products: Product[];
  setProduct: any;
}
export interface ProductSelected extends Product {
  quantity: number;
}
export interface ProductsSelected {
  products: ProductSelected[];
}
