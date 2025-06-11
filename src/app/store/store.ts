import { configureStore } from '@reduxjs/toolkit';

import { cartListReducer } from '@entities/Cart';
import { productListReducer } from '@entities/product';
import { reviewListReducer } from '@entities/Review';

export const store = configureStore({
  reducer: {
    reviews: reviewListReducer,
    cartList: cartListReducer,
    productList: productListReducer,
  },
});
