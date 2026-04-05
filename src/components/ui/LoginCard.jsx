import React from 'react'
import { Link } from 'react-router-dom'
import sampleIcon from '../../assets/sample.svg'
import backIcon from '../../assets/back.png'
import '../../pages/Auth/Auth.css'

export default function LoginCard() {
  return (
    <div className="la-signup-card">
      <Link to="/" className="back-home-link">
        <img src={backIcon} alt="back" className="back-icon-accent" />
        <span>Volver al inicio</span>
      </Link>

      <div className="card-header-left">
        <div className="la-brand">
          <div className="brand-icon"><img src={sampleIcon} alt="logo"/></div>
          <span>NombreApp</span>
        </div>
        <h2 className="accent-title">Iniciar sesión</h2>
        <p className="login-redirect muted small">
          ¿No tienes cuenta? <Link to="/signup" className="la-link">Crear cuenta</Link>
        </p>
      </div>
      
      <form className="signup-form-list">
        <div className="input-group">
          <label>Correo electrónico <span className="required">*</span></label>
          <input type="email" placeholder="correo@ejemplo.com" required />
        </div>

        <div className="input-group">
          <label>Contraseña <span className="required">*</span></label>
          <input type="password" placeholder="Tu contraseña" required />
        </div>

        <p className="login-redirect muted small">
            <Link to="/forgotPassword" className="la-link">¿Olvidaste tu contraseña?</Link>
        </p>
        <br></br>

        <button type="submit" className="btn primary block">
          Entrar
        </button>
      </form>
    </div>
  )
}