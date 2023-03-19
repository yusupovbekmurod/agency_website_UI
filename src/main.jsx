import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Routes>
    <App />
    <ToastContainer />
  </Routes>
)
