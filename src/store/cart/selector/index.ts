import { RootState } from '@store/index';
import { createSelector } from '@reduxjs/toolkit';

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQunatity = Object.values(items).reduce((acc, item) => {
      return acc + item;
    }, 0);
    return totalQunatity;
  }
);

export { getCartTotalQuantitySelector };
