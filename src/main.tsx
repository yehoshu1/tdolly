import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/App.css'
// @ts-ignore
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
