import { backendBaseUrl } from '@shared/config';
import type { CreateOrder, CreateOrderResponse } from './types';

export async function createOrder(
  data: CreateOrder
): Promise<CreateOrderResponse> {
  const response = await fetch(`${backendBaseUrl}/order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Failed to create order');
  return response.json();
}
