import React from 'react'
import uploadIcon from '../../assets/upload.svg'
import layersIcon from '../../assets/layers.svg'
import dollarIcon from '../../assets/dollar.svg'
import '../../pages/Landing/landing.css'

function Card({icon, title, children}){
  return (
    <div className="hiw-card">
      <div className="hiw-icon"><img src={icon} alt=""/></div>
      <h3>{title}</h3>
      <p className="muted small">{children}</p>
    </div>
  )
}

export default function HowItWorks(){
  return (
    <section className="la-how">
      <div className="la-container">
        <h2 className="center">¿Cómo funciona?</h2>
        <div className="hiw-grid">
          <Card icon={uploadIcon} title="1. Carga tu archivo 3D">Sube archivos con máximo 10 submallados. Soportamos formatos .blend, .obj, .glb, .gltf y .stl</Card>
          <Card icon={layersIcon} title="2. Selecciona materiales">Elige entre diversos materiales como plásticos, maderas, metales y más para cada componente.</Card>
          <Card icon={dollarIcon} title="3. Obtén tu estimación">Recibe cálculos detallados de costos y cantidades de material necesarias para tu proyecto.</Card>
        </div>
      </div>
    </section>
  )
}
