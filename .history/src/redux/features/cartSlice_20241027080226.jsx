import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
      state.totalQuantity += action.payload.quantity;
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
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
        existingItem.quantity = action.payload.quantity;
        state.totalQuantity += quantityDifference;
      }
    },
  },
});

// Export actions as named exports
export const { addItem, removeItem, clearCart, updateItemQuantity } = cartSlice.actions;

// Export reducer as the default export
export default cartSlice.reducer;
