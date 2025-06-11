import { createSlice } from '@reduxjs/toolkit';
import type { ProductListState } from './types';
import { fetchNextProductPage } from './productListThunk';

const initialState: ProductListState = {
  products: [],
  pages: null,
  isLoading: false,
  error: null,
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchNextProductPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNextProductPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(...(action.payload.items || []));
        state.pages = action.payload.page;
      })
      .addCase(fetchNextProductPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch products';
      }),
  selectors: {
    selectProductList: (state) => state,
  },
});

export default productListSlice.reducer;

export const { selectProductList } = productListSlice.selectors;
