import { configureStore } from '@reduxjs/toolkit';

import {
  cartListenerMiddleware,
  cartListReducer,
  loadCartItemsFromStorage,
} from '@entities/Cart';
import { productListReducer } from '@entities/product';
import { reviewListReducer } from '@entities/Review';

export const store = configureStore({
  reducer: {
    reviews: reviewListReducer,
    cartList: cartListReducer,
    productList: productListReducer,
  },
  preloadedState: {
    cartList: {
      items: loadCartItemsFromStorage(),
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartListenerMiddleware.middleware),
});
