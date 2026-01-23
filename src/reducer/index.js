import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice';
import blogReducer from '../slices/blogSlice';
import categoryReducer from '../slices/categorySlice';

const rootReducer = combineReducers({
  user: userReducer,       
  blog: blogReducer,        
  category: categoryReducer 
});

export default rootReducer;