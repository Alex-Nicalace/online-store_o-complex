import { backendBaseUrl } from '@shared/config';
import type { Review } from './types';

export async function getReviews(): Promise<Review[]> {
  const response = await fetch(`${backendBaseUrl}/reviews`);
  if (!response.ok) throw new Error('Failed to fetch reviews');
  return response.json();
}
