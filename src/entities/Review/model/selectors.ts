import { createSelector } from '@reduxjs/toolkit';
import type { ReviewListState } from './types';

export const selectReviewList = createSelector(
  (state: RootState) => state,
  (state) => state.reviews
);

export const selectReviewListData = createSelector(
  selectReviewList,
  (state: ReviewListState) => state.reviews
);

export const selectReviewListLoading = createSelector(
  selectReviewList,
  (state: ReviewListState) => state.isLoading
);

export const selectReviewListError = createSelector(
  selectReviewList,
  (state: ReviewListState) => state.error
);
