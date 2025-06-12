import { createSelector } from '@reduxjs/toolkit';
import { getStrKey } from '../lib';

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.cartList
);

export const selectCartList = createSelector(selectBase, (state) =>
  Object.values(state.items)
);

export const selectHasItemById = (id: number) =>
  createSelector(selectBase, (state) => getStrKey(id) in state.items);

export const selectQuantityById = (id: number) =>
  createSelector(selectBase, (state) => state.items[getStrKey(id)].quantity);

export const selectCartIsEmpty = createSelector(
  selectCartList,
  (state) => state.length === 0
);
