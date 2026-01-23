import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findOrCreateUserByEmail } from '../services/dataService';
import { setActiveEmail } from '../utils/storage';

const initialState = {
  currentUser: null,        // Current logged-in user object {id, email, name, createdAt}
  activeEmail: null,        
  isAuthenticated: false,   
  isLoading: false,        
  error: null     
};

// Async thunk for email-based login
export const loginWithEmail = createAsyncThunk(
  'user/loginWithEmail',
  async (email, { rejectWithValue }) => {
    try {
      const user = findOrCreateUserByEmail(email);
      return user;
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Logout user
    logout: (state) => {
      state.currentUser = null;
      state.activeEmail = null;
      state.isAuthenticated = false;
      state.error = null;
      // Clear active email from localStorage
      setActiveEmail(null);
    },
    
    // Clear any error
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login pending
      .addCase(loginWithEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // Login fulfilled
      .addCase(loginWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.activeEmail = action.payload.email;
        state.isAuthenticated = true;
        state.error = null;
      })
      // Login rejected
      .addCase(loginWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  }
});

export const {
  logout,
  clearError,
  updateUserProfile
} = userSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectActiveEmail = (state) => state.user.activeEmail;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;