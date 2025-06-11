import type { Product } from '@shared/api';

export interface ProductListState {
  products: Product[];
  pages: number | null;
  isLoading: boolean;
  error: string | null;
}
