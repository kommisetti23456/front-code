import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // You can add more reducers here if you have other slices
  },
});

export default store;
