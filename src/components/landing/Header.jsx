import React from 'react'
import sampleIcon from '../../assets/sample.svg'
import '../../pages/Landing/landing.css'

export default function Header() {
  return (
    <header className="la-header">
      <div className="la-container la-header-inner">
        <div className="la-brand" onClick={() => navigate('/')}>
          <div className="brand-icon"><img src={sampleIcon} alt="logo"/></div>
          <span>{import.meta.env.VITE_APP_NAME}</span>
        </div>
        <nav className="la-nav">
          <a className="la-link" href="/login">Iniciar sesión</a>
          <a className="la-cta primary-pill" href="/signup">Crear cuenta</a>
        </nav>
      </div>
    </header>
  )
}
