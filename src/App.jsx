import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp/SignUp'
import './pages/Landing/landing.css'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para el Landing Page principal */}
        <Route path="/" element={<Landing />} />
        
        {/* Ruta para la nueva interfaz de Registro */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App