import React from 'react'
import '../../pages/Landing/landing.css'

export default function Footer(){
  return (
    <footer className="la-footer">
      <div className="la-container">
        <p className="muted">© 2026 {import.meta.env.VITE_APP_NAME}. Sistema de estimación de costos para proyectos de fabricación 3D.</p>
      </div>
    </footer>
  )
}
