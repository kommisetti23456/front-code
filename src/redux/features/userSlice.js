// src/redux/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userData: null, // You can add more user-related data here
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload; // Assume payload contains user data
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null; // Clear user data on logout
        },
    },
});

// Export actions and reducer
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
