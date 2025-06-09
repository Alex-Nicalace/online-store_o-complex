import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CartItem, CartListState } from './types';

const initialState: CartListState = {
  items: [
    {
      id: 1,
      name: 'товар1',
      quantity: 1,
      price: 100,
    },
    {
      id: 2,
      name: 'товар2',
      quantity: 44,
      price: 150,
    },
    {
      id: 3,
      name: 'товар3',
      quantity: 3,
      price: 200,
    },
  ],
};

const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementItem(state, action: PayloadAction<number>) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrementItem(state, action: PayloadAction<number>) {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    },
    setQuantityById(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    },
  },
  selectors: {
    selectCartList: (state) => state.items,
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

export const { selectCartList } = cartListSlice.selectors;
