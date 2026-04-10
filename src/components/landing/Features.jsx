import React from 'react'
import checkIcon from '../../assets/check.png'
import goIcon from '../../assets/go.png'
import '../../pages/Landing/landing.css'

const items = [
  'Pensado para proyectos personales y pequeña escala, no requiere infraestructura industrial',
  'Base de datos completa de materiales con precios actualizados para makers',
  'Gestiona múltiples proyectos y compara diferentes opciones de materiales',
  'Cálculos de volumen y peso para una buena planificación de tus proyectos 3D'
]

export default function Features(){
  return (
    <section className="la-features">
      <div className="la-container la-features-inner">
        <div className="features-left">
          <h3>Diseñado para creadores independientes</h3>
          <ul className="features-list">
            {items.map((t,i)=> (
                <li key={i}>
                    <div className="feature-check">
                        <img src={checkIcon} alt="check"/>
                    </div>
                    <span>{t}</span>
                </li>
            ))}
          </ul>
        </div>
        <div className="features-right">
          <div className="cta-card">
            <h4>¿Listo para comenzar?</h4>
            <p className="small">Crea tu cuenta gratuita y empieza a estimar costos de tus proyectos 3D hoy mismo.</p>
            <br></br>
            <a className="btn white block" href="/signup">
                Crear cuenta gratis
                <img src={goIcon} alt="" className="btn-icon-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
