import React from 'react'
import Header from '../../components/landing/Header'
import Hero from '../../components/landing/Hero'
import HowItWorks from '../../components/landing/HowItWorks'
import Features from '../../components/landing/Features'
import Footer from '../../components/landing/Footer'
import './landing.css'

export default function Landing(){
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  )
}
