import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getStrKey } from '../lib';
import type { CartListState, CartNewItem } from './types';

const initialState: CartListState = {
  items: {},
};

const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartNewItem>) {
      const id = getStrKey(action.payload.productId);
      state.items[id] = {
        ...action.payload,
        quantity: 1,
      };
    },
    removeItem(state, action: PayloadAction<number>) {
      delete state.items[getStrKey(action.payload)];
    },
    incrementItem(state, action: PayloadAction<number>) {
      const id = getStrKey(action.payload);
      const item = state.items[id];
      if (!item) return;

      state.items[id] = {
        ...item,
        quantity: item.quantity + 1,
      };
    },
    decrementItem(state, action: PayloadAction<number>) {
      const id = getStrKey(action.payload);
      const item = state.items[id];
      if (!item) return;

      if (item.quantity > 1) {
        state.items[id] = {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        delete state.items[id];
      }
    },
    setQuantityById(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const id = getStrKey(action.payload.id);
      if (action.payload.quantity <= 0) {
        delete state.items[id];
      } else {
        const item = state.items[id];
        if (!item) return;
        state.items[id] = {
          ...item,
          quantity: action.payload.quantity,
        };
      }
    },
  },
});

export default cartListSlice.reducer;

export const {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  setQuantityById,
} = cartListSlice.actions;
