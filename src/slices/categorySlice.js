import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories } from '../services/dataService';

const initialState = {
  categories: [],           // Array of category objects {id, name, slug, description, createdAt}
  isLoading: false,         
  error: null,              
  selectedCategoryId: null  
};

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = getAllCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch categories');
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    
    clearCategorySelection: (state) => {
      state.selectedCategoryId = null;
    },
    
    clearCategoryError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const {
  selectCategory,
  clearCategorySelection,
  clearCategoryError
} = categorySlice.actions;

// Selectors
export const selectAllCategories = (state) => state.category.categories;
export const selectCategoryById = (categoryId) => (state) => 
  state.category.categories.find(cat => cat.id === categoryId);
export const selectCategoriesLoading = (state) => state.category.isLoading;
export const selectCategoryError = (state) => state.category.error;
export const selectSelectedCategoryId = (state) => state.category.selectedCategoryId;
export const selectSelectedCategory = (state) => 
  state.category.categories.find(cat => cat.id === state.category.selectedCategoryId);

// Get category by slug
export const selectCategoryBySlug = (slug) => (state) => 
  state.category.categories.find(cat => cat.slug === slug);

// Get blog count by category
// export const selectCategoryBlogCount = (categoryId) => (state) => 
//   state.blog?.blogs.filter(blog => blog.categoryId === categoryId).length || 0;

export default categorySlice.reducer;