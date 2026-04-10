import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sampleIcon from '../../assets/sample.svg'
import backIcon from '../../assets/back.png'
import openEyeIcon from '../../assets/openEye.png'
import closedEyeIcon from '../../assets/closedEye.png'
import '../../pages/Auth/Auth.css'

export default function SignUpCard() {
  // Estados para controlar la visibilidad de cada contraseña
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      // Lógica de autenticación
      
      console.log("Registro exitoso. Redirigiendo...");
      navigate('/login');
    }, 2500);
  };

  return (
    <div className="la-signup-card">
      {isLoading ? (
        /* --- PANTALLA DE CARGA --- */
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <h3 className="accent-title">Registrando usuario</h3>
          <p className="muted small">Guardando tus credenciales...</p>
        </div>
      ) : (
        /* --- FORMULARIO --- */
        <>
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
          
          <form className="signup-form-list" onSubmit={handleSignUp}>
            <div className="input-group">
              <label>Nombre<span className="required">*</span></label>
              <input type="text" placeholder="Tu nombre" required />
            </div>

            <div className="input-group">
              <label>Apellido <span className="required">*</span></label>
              <input type="text" placeholder="Tu apellido" required />
            </div>

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
                  placeholder="Mínimo 8 caracteres" 
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

            {/* Campo de Confirmar Contraseña con Ojo */}
            <div className="input-group password-group">
              <label>Confirmar contraseña <span className="required">*</span></label>
              <div className="password-input-wrapper">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Repite tu contraseña" 
                  required 
                />
                <button 
                  type="button" 
                  className="toggle-password-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  <img 
                    src={showConfirmPassword ? openEyeIcon : closedEyeIcon} 
                    alt="" 
                  />
                </button>
              </div>
            </div>

            <button type="submit" className="btn primary block">
              Registrarse ahora
            </button>
          </form>
        </>
      )}
    </div>
  )
}