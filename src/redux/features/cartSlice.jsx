import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Update quantity of the existing item
        existingItem.quantity += action.payload.quantity;
      } else {
        // Add new item with initial quantity
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
      state.totalQuantity += action.payload.quantity; // Update total quantity
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Subtract the quantity of the removed item from totalQuantity
        state.totalQuantity -= existingItem.quantity;
        // Filter out the removed item from items
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
    updateItemQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        const quantityDifference = action.payload.quantity - existingItem.quantity;
        existingItem.quantity = action.payload.quantity; // Update item quantity
        state.totalQuantity += quantityDifference; // Adjust totalQuantity
      }
    },
  },
});

// Export actions as named exports
export const { addToCart, removeItem, clearCart, updateItemQuantity } = cartSlice.actions;

// Export reducer as the default export
export default cartSlice.reducer;
