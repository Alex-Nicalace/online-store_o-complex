import { backendBaseUrl } from '@shared/config';
import type { GetReviewsArgs, Review } from './types';

export async function getReviews({
  signal,
}: GetReviewsArgs): Promise<Review[]> {
  const response = await fetch(`${backendBaseUrl}/reviews`, {
    signal,
  });
  if (!response.ok) throw new Error('Failed to fetch reviews');
  return response.json();
}
