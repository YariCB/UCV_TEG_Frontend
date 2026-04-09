import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sampleIcon from '../../assets/sample.svg'
import backIcon from '../../assets/back.png'
import openEyeIcon from '../../assets/openEye.png'
import closedEyeIcon from '../../assets/closedEye.png'
import '../../pages/Auth/Auth.css'

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validaciones (campos vacíos, formato, etc.)
    // Llamada a la API para verificar las credenciales
    
    console.log("Validando datos...");

    // Redirección al Home
    navigate('/home');
  };

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
      
      <form className="signup-form-list" onSubmit={handleLogin}>
        <div className="input-group">
          <label>Correo electrónico <span className="required">*</span></label>
          <input type="email" placeholder="correo@ejemplo.com" required />
        </div>

        {/* Campo de Contraseña con Ojo */}
        <div className="input-group password-group">
            <label>Contraseña <span className="required">*</span></label>
              <div className="password-input-wrapper">
                <input 
                      type={showPassword ? "text" : "password"} // Type dinámico
                      placeholder="Tu contraseña" 
                      required 
                />
                {/* Botón del ojo */}
                <button 
                      type="button"
                      className="toggle-password-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  <img 
                        src={showPassword ? openEyeIcon : closedEyeIcon} // Icono dinámico
                        alt="" 
                  />
                </button>
            </div>
        </div>

        <p className="login-redirect muted small">
            <Link to="/forgot-password" className="la-link">¿Olvidaste tu contraseña?</Link>
        </p>
        <br></br>

        <button type="submit" className="btn primary block">
          Ingresar
        </button>
      </form>
    </div>
  )
}