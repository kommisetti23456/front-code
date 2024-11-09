 // src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice'; // Import user reducer
import cartReducer from './features/cartSlice'; // Import your cart reducer if you have one

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer, // Add cart reducer if applicable
    },
});

export default store;

