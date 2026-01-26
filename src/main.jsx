import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { seedData } from './utils/seedData.js'
// import './testService.js' // Import test utilities for browser console
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from './theme.js'

const store = configureStore({
  reducer: rootReducer,
});

// Seed data once on app initialization
seedData();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
