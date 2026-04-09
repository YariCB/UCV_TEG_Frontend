import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CubeScene from '../../components/canvas/CubeScene.jsx';
import backIcon from '../../assets/back.png';
import openEyeIcon from '../../assets/openEye.png'
import closedEyeIcon from '../../assets/closedEye.png'
import './Auth.css';

export default function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState(""); // Para recordar el correo en el reenvío
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Acción final: Actualizar contraseña
            setIsLoading(true);
            
            // Simulación de proceso en servidor
            setTimeout(() => {
                console.log("Contraseña actualizada con éxito");
                navigate('/login'); // Redirige al login tras finalizar
            }, 2500);
        }
    };

    const nextStep = (e) => {
        e.preventDefault();
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleResendCode = () => {
        console.log("Reenviando código a:", email);
        alert("Código reenviado con éxito");
    };

    return (
        <div className="la-signup-page">
            <div className="signup-left">
                <div className="canvas-wrapper"><CubeScene /></div>
                <div className="left-content">
                    <h1>Recupera tu acceso</h1>
                    <p className="muted">Ayudamos a que vuelvas a tus proyectos 3D.</p>
                </div>
            </div>

            <div className="signup-right">
                <div className="form-container">
                    <div className="la-signup-card">
                        {isLoading ? (
                            /* --- PANTALLA DE CARGA --- */
                            <div className="loading-screen">
                                <div className="loading-spinner"></div>
                                <h2 className="accent-title">Actualizando contraseña</h2>
                                <p className="muted small">Guardando tus nuevos datos de acceso de forma segura...</p>
                            </div>
                        ) : (
                            <>
                                /* --- FORMULARIO --- */
                                {/* Botón dinámico: vuelve al login o al paso anterior */}
                                <button 
                                    onClick={step === 1 ? null : prevStep} 
                                    className="back-home-link"
                                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    <img src={backIcon} alt="back" className="back-icon-accent" />
                                    {step === 1 ? (
                                        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Volver al login</Link>
                                    ) : (
                                        <span>Paso anterior</span>
                                    )}
                                </button>

                                <div className="card-header-left">
                                    <h2 className="accent-title">
                                        {step === 1 && "Olvidé mi contraseña"}
                                        {step === 2 && "Verifica tu correo"}
                                        {step === 3 && "Nueva contraseña"}
                                    </h2>
                                    <p className="muted small">
                                        {step === 1 && "Introduce tu correo para recibir un código."}
                                        {step === 2 && `Enviamos un código a ${email || "tu correo"}.`}
                                        {step === 3 && "Crea una contraseña segura para tu cuenta."}
                                    </p>
                                </div>

                                <form className="signup-form-list" onSubmit={handleSubmit}>
                                    {step === 1 && (
                                        <div className="input-group">
                                            <label>Correo electrónico <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                placeholder="correo@ejemplo.com" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required 
                                            />
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="input-group">
                                            <label>Código de verificación <span className="required">*</span></label>
                                            <input type="text" placeholder="000000" maxLength="6" required style={{ textAlign: 'center', letterSpacing: '8px', fontSize: '20px' }} />
                                            <p className="muted small" style={{ marginTop: '10px' }}>
                                                ¿No recibiste nada? {" "}
                                                <span onClick={handleResendCode} className="la-link" style={{ cursor: 'pointer' }}>Reenviar código</span>
                                            </p>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <>
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
                                        </>
                                    )}

                                    <button type="submit" className="btn primary block">
                                        {step === 1 && "Enviar código"}
                                        {step === 2 && "Verificar código"}
                                        {step === 3 && "Actualizar contraseña"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}