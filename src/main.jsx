import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <div className='capitalize h-screen bg-gray-100'>
      <App />
    </div>
  </>,
)
