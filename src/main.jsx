import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home.jsx'
import './styles/reset.scss'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
