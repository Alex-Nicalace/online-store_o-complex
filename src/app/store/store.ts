import { configureStore } from '@reduxjs/toolkit';

import { reviewListReducer } from '@entities/Review';
import { cartListReducer } from '@entities/Cart';

export const store = configureStore({
  reducer: {
    reviews: reviewListReducer,
    cartList: cartListReducer,
  },
});
