import { backendBaseUrl } from '@shared/config';
import type { GetProductsArgs, ProductsResponse } from './types';

export async function getProducts({
  page,
  pageSize,
}: GetProductsArgs): Promise<ProductsResponse> {
  const response = await fetch(
    `${backendBaseUrl}/products?page=${page}&page_size=${pageSize}`
  );
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}
