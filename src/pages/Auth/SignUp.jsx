import React from 'react'
import CubeScene from '../../components/canvas/CubeScene.jsx'
import SignUpCard from '../../components/ui/SignUpCard.jsx'
import './Auth.css'

export default function SignUp() {
  return (
    <div className="la-signup-page">
      <div className="signup-left">
        <div className="canvas-wrapper">
          <CubeScene />
        </div>
        <div className="left-content">
          <h1>Únete a {import.meta.env.VITE_APP_NAME}</h1>
          <p className="muted">
            Comienza a estimar costos de tus proyectos 3D
          </p>
        </div>
      </div>

      <div className="signup-right">
        <div className="form-container">
          <SignUpCard />
        </div>
      </div>
    </div>
  )
}