import { createSlice } from '@reduxjs/toolkit';
import { TProduct } from '@customTypes/product';
import { getCartTotalQuantitySelector } from './selector';
interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export { getCartTotalQuantitySelector };
export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
