import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import {
  addItem,
  clear,
  decrementItem,
  incrementItem,
  removeItem,
  setQuantityById,
} from './cartListSlice';
import { LOCAL_STORAGE_CART_KEY } from '../config';

export const cartListenerMiddleware = createListenerMiddleware();
cartListenerMiddleware.startListening({
  matcher: isAnyOf(
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    setQuantityById,
    clear
  ),
  effect: (_, listenerApi) => {
    localStorage.setItem(
      LOCAL_STORAGE_CART_KEY,
      JSON.stringify((listenerApi.getState() as RootState).cartList.items)
    );
  },
});
