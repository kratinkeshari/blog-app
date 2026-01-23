import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllBlogs,
  getBlogsByCategory,
  createBlog,
  deleteBlog,
  toggleLike as toggleLikeService
} from '../services/dataService';

const initialState = {
  blogs: [],                    // Array of blog objects
  isLoading: false,            
  isCreating: false,            
  isDeleting: false,            
  error: null,                 
  selectedBlogId: null,
  filter: {
    categoryId: null,           // Filter by category
    searchQuery: ''             // Search query
  }
};

export const fetchBlogs = createAsyncThunk(
  'blog/fetchBlogs',
  async (_, { rejectWithValue }) => {
    try {
      const blogs = getAllBlogs();
      return blogs;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch blogs');
    }
  }
);

export const fetchBlogsByCategory = createAsyncThunk(
  'blog/fetchBlogsByCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      const blogs = getBlogsByCategory(categoryId);
      return blogs;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch blogs by category');
    }
  }
);

export const createNewBlog = createAsyncThunk(
  'blog/createNewBlog',
  async ({ blogData, authorEmail, categoryId }, { rejectWithValue }) => {
    try {
      const newBlog = createBlog(blogData, authorEmail, categoryId);
      return newBlog;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to create blog');
    }
  }
);

export const removeBlog = createAsyncThunk(
  'blog/removeBlog',
  async ({ blogId, userEmail }, { rejectWithValue }) => {
    try {
      deleteBlog(blogId, userEmail);
      return blogId;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete blog');
    }
  }
);

export const toggleBlogLike = createAsyncThunk(
  'blog/toggleBlogLike',
  async ({ blogId, userEmail }, { rejectWithValue }) => {
    try {
      const result = toggleLikeService(blogId, userEmail);
      return { blogId, ...result };
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to toggle like');
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setSelectedBlog: (state, action) => {
      state.selectedBlogId = action.payload;
    },
    
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    
    clearFilter: (state) => {
      state.filter = {
        categoryId: null,
        searchQuery: ''
      };
    },
    
    clearBlogError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Fetch blogs by category
      .addCase(fetchBlogsByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Create blog
      .addCase(createNewBlog.pending, (state) => {
        state.isCreating = true;
        state.error = null;
      })
      .addCase(createNewBlog.fulfilled, (state, action) => {
        state.isCreating = false;
        state.blogs.unshift(action.payload);
        state.error = null;
      })
      .addCase(createNewBlog.rejected, (state, action) => {
        state.isCreating = false;
        state.error = action.payload;
      })
      
      // Delete blog
      .addCase(removeBlog.pending, (state) => {
        state.isDeleting = true;
        state.error = null;
      })
      .addCase(removeBlog.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
        state.error = null;
      })
      .addCase(removeBlog.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      })
      
      // Toggle like
      .addCase(toggleBlogLike.fulfilled, (state, action) => {
        const { blogId } = action.payload;
        const blog = state.blogs.find(b => b.id === blogId);
        if (blog) {
          const updatedBlog = action.meta.arg;
          const userEmail = updatedBlog.userEmail;
          const likeIndex = blog.likes.indexOf(userEmail);
          
          if (action.payload.isLiked) {
            // Like was added
            if (likeIndex === -1) {
              blog.likes.push(userEmail);
            }
          } else {
            // Like was removed
            if (likeIndex > -1) {
              blog.likes.splice(likeIndex, 1);
            }
          }
        }
      });
  }
});

export const {
  setSelectedBlog,
  setFilter,
  clearFilter,
  clearBlogError
} = blogSlice.actions;

// Selectors
export const selectAllBlogs = (state) => state.blog.blogs;
export const selectBlogById = (blogId) => (state) => 
  state.blog.blogs.find(blog => blog.id === blogId);
export const selectBlogsLoading = (state) => state.blog.isLoading;
export const selectBlogError = (state) => state.blog.error;
export const selectIsCreating = (state) => state.blog.isCreating;
export const selectIsDeleting = (state) => state.blog.isDeleting;
export const selectSelectedBlog = (state) => 
  state.blog.blogs.find(blog => blog.id === state.blog.selectedBlogId);
export const selectBlogFilter = (state) => state.blog.filter;

export const selectFilteredBlogs = (state) => {
  const { blogs, filter } = state.blog;
  let filtered = blogs;
  
  if (filter.categoryId) {
    filtered = filtered.filter(blog => blog.categoryId === filter.categoryId);
  }
  
  if (filter.searchQuery) {
    const query = filter.searchQuery.toLowerCase();
    filtered = filtered.filter(blog => 
      blog.title.toLowerCase().includes(query) ||
      blog.content.toLowerCase().includes(query) ||
      blog.excerpt.toLowerCase().includes(query)
    );
  }
  
  return filtered;
};

export const selectHasUserLiked = (blogId, userEmail) => (state) => {
  const blog = state.blog.blogs.find(b => b.id === blogId);
  return blog ? blog.likes.includes(userEmail) : false;
};

export default blogSlice.reducer;