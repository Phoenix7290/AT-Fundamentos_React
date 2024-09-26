import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Modal from 'react-modal'

import Router from './routes';
// import { AuthProvider } from './contexts/AuthContext';

Modal.setAppElement("#root");

import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
