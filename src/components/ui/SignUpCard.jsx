import React from 'react'
import { Link } from 'react-router-dom'
import sampleIcon from '../../assets/sample.svg'
import backIcon from '../../assets/back.png'
import '../../pages/SignUp/SignUp.css'

export default function SignUpCard() {
  return (
    <div className="la-signup-card">
      {/* Botón Volver ahora dentro del card */}
      <Link to="/" className="back-home-link">
        <img src={backIcon} alt="back" className="back-icon-accent" />
        <span>Volver al inicio</span>
      </Link>

      <div className="card-header-left">
        <div className="la-brand">
          <div className="brand-icon"><img src={sampleIcon} alt="logo"/></div>
          <span>NombreApp</span>
        </div>
        <h2 className="accent-title">Crear cuenta gratis</h2>
        <p className="login-redirect muted small">
          ¿Ya tienes una cuenta? <Link to="/login" className="la-link">Inicia sesión</Link>
        </p>
      </div>
      
      <form className="signup-form-list">
        <div className="input-group">
          <label>Nombre completo <span className="required">*</span></label>
          <input type="text" placeholder="Ej. Juan Pérez" required />
        </div>

        <div className="input-group">
          <label>Correo electrónico <span className="required">*</span></label>
          <input type="email" placeholder="correo@ejemplo.com" required />
        </div>

        <div className="input-group">
          <label>Contraseña <span className="required">*</span></label>
          <input type="password" placeholder="Mínimo 8 caracteres" required />
        </div>

        <div className="input-group">
          <label>Confirmar contraseña <span className="required">*</span></label>
          <input type="password" placeholder="Repite tu contraseña" required />
        </div>

        <button type="submit" className="btn primary block">
          Registrarse ahora
        </button>
      </form>
    </div>
  )
}