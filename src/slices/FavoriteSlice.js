import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  items: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromFavorite: (state, action) => {
      let newFavorite = [...state.items];
      console.log(newFavorite)
      let itemIndex = state.items.findIndex(item => item.name == action.payload.name);
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      }
      state.items = newFavorite;
    },
    emptyFavorite: (state, action) => {
      state.items = [];
    }
  }
})

export const { addToFavorite, removeFromFavorite, emptyFavorite } = favoriteSlice.actions;

export const selectFavorite = state => state.favorite.items;

export const selectFavoriteById = createSelector(
  [selectFavorite, (state, name) => name],
  (items, name) => items.filter(item => item.name === name),
);

export default favoriteSlice.reducer;