import React from 'react'
import heroImg from '../../assets/hero.png'
import uploadIcon from '../../assets/upload.svg'
import CubeScene from '../canvas/CubeScene.jsx'
import '../../pages/Landing/landing.css'

export default function Hero() {
  return (
    <section className="la-hero">
      <div className="la-container la-hero-inner">
        <div className="la-hero-left">
          <h1>Estima costos de tus proyectos 3D en minutos</h1>
          <p>Sube tus archivos 3D y obtén estimaciones de costos y materiales para proyectos independientes. Perfecto para makers, artesanos y pequeños emprendedores.</p>
          <div className="la-hero-ctas">
            <a className="btn primary" href="/signup"><img src={uploadIcon} alt="" className="btn-icon"/>Comenzar ahora</a>
            <a className="btn ghost" href="/login">Ya tengo cuenta</a>
          </div>
        </div>
        <div className="la-hero-right">
          <CubeScene />
        </div>
      </div>
    </section>
  )
}
