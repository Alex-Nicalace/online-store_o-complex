import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '@shared/api';
import { PRODUCT_PAGE_SIZE } from '../config';
import type { ProductListState } from './types';

export const fetchNextProductPage = createAsyncThunk(
  'productList/fetchNextProductPage',
  async (_, { getState, signal }) => {
    const state = getState() as { productList: ProductListState };
    const { pages } = state.productList;
    const page = (pages ?? 0) + 1;
    return getProducts({ page, pageSize: PRODUCT_PAGE_SIZE, signal });
  }
);
