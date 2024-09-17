import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(item => item.id == action.payload.id);
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Can't remove the item that is not added to cart!");
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    }
  }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCarItemById = createSelector(
  [selectCartItems, (state, id) => id],
  (items, id) => items.filter(item => item.id === id)
);

export const selectCartTotal = state => state.cart.items.reduce((total, item) => total = total+item.price, 0);

export default cartSlice.reducer;