import React from 'react'
import CubeScene from '../../components/canvas/CubeScene.jsx'
import LoginCard from '../../components/ui/LoginCard.jsx'
import './Auth.css'

export default function Login() {
  return (
    <div className="la-signup-page">
      <div className="signup-left">
        <div className="canvas-wrapper">
          <CubeScene />
        </div>
        <div className="left-content">
          <h1>Bienvenido de nuevo</h1>
          <p className="muted">
            Accede a tus proyectos y continúa estimando tus modelos 3D.
          </p>
        </div>
      </div>

      <div className="signup-right">
        <div className="form-container">
          <LoginCard />
        </div>
      </div>
    </div>
  )
}