import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './context/SearchContext'
import { ModalProvider } from './context/ModalContext'
import { SidebarProvider } from './context/SidebarContext'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <SearchProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </SearchProvider>
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>,
)
