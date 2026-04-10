import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './context/SearchContext'
import { ModalProvider } from './context/ModalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ModalProvider>
  </StrictMode>,
)
