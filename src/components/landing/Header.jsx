import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import sampleIcon from '../../assets/sample.svg'
import { useTheme } from '../../context/ThemeContext'
import '../../pages/Landing/landing.css'

export default function Header() {
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="la-header">
      <div className="la-container la-header-inner">
        <div className="la-brand" onClick={() => navigate('/')}>
          <div className="brand-icon"><img src={sampleIcon} alt="logo"/></div>
          <span>{import.meta.env.VITE_APP_NAME}</span>
        </div>
        <nav className="la-nav">
          <button
            type="button"
            className="la-theme-btn"
            onClick={toggleTheme}
            aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            title={isDark ? 'Tema claro' : 'Tema oscuro'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="la-link" href="/login">Iniciar sesión</a>
          <a className="la-cta primary-pill" href="/signup">Crear cuenta</a>
        </nav>
      </div>
    </header>
  )
}
