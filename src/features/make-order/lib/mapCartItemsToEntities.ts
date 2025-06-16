import type { CartItem } from '@entities/Cart';
import type { OrderCartEntity } from '@shared/api';
import { useMemo } from 'react';

export function useMapCartItemsToOrderCartEntitys(
  items: CartItem[]
): OrderCartEntity[] {
  return useMemo(
    () => items.map(({ productId, quantity }) => ({ id: productId, quantity })),
    [items]
  );
}
