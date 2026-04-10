import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './context/SearchContext'
import { ModalProvider } from './context/ModalContext'
import { SidebarProvider } from './context/SidebarContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <SearchProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </SearchProvider>
    </ModalProvider>
  </StrictMode>,
)
