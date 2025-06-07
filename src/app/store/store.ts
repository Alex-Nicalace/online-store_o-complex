import { reviewListReducer } from '@entities/Review';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    reviews: reviewListReducer,
  },
});
