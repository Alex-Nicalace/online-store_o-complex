import { createAsyncThunk } from '@reduxjs/toolkit';

import { getReviews } from '@shared/api';

export const fetchReviewList = createAsyncThunk(
  'reviews/fetchReviewList',
  getReviews
);
