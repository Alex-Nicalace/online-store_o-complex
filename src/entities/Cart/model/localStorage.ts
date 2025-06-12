import { LOCAL_STORAGE_CART_KEY } from '../config';
import type { CartItem } from './types';

export function loadCartItemsFromStorage(): Record<string, CartItem> {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY) || '{}');
}
