import { createSlice } from '@reduxjs/toolkit';

import type { ReviewListState } from './types';
import { fetchReviewList } from './reviewListThunk';

const initialState: ReviewListState = {
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewListSlice = createSlice({
  name: 'reviewList',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchReviewList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchReviewList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch reviews';
      }),
});

export default reviewListSlice.reducer;
