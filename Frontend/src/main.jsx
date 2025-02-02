import React from 'react'
import ReactDOM from 'react-dom/client'
// Import Swiper CSS
import "swiper/css"; // Core styles
import "swiper/css/pagination"; // Pagination styles

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from "./Pages/Home/components/context/DarkModeContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
