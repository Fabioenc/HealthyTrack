import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ThemeProvider } from './theme/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
