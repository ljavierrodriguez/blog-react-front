import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import App from './App.jsx'
import AppProvider from './context/AppProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
)
