import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from './routes';
// import { AuthProvider } from './contexts/AuthContext';

import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
