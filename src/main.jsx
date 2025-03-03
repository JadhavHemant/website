import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RainEffect from './Components/RainEffect/RainEffect.jsx'


createRoot(document.getElementById('root')).render(
  <>
  <div className='capitalize h-screen'>
    <RainEffect/>
    <App />
  </div>
  </>,
)
