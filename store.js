import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './src/slices/RestaurantSlice';
import { cartSlice } from './src/slices/CartSlice';
import { categorySlice } from './src/slices/CategorySlice';
import { favoriteSlice } from './src/slices/FavoriteSlice';

export default store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    restaurant: restaurantSlice.reducer,
    category: categorySlice.reducer,
    favorite: favoriteSlice.reducer,
  },
})