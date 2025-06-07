import type { Review } from '@shared/api';

export interface ReviewListState {
  reviews: Review[];
  isLoading: boolean;
  error: string | null;
}
