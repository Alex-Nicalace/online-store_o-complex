export interface GetProductsArgs {
  page: number;
  pageSize: number;
  signal?: AbortSignal;
}

export interface ProductsResponse {
  page: number;
  amount: number;
  total: number;
  items?: Product[];
}

export interface Product {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
}
