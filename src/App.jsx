import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import './pages/Landing/landing.css'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para el Landing Page principal */}
        <Route path="/" element={<Landing />} />
        
        {/* Ruta para la interfaz de Registro */}
        <Route path="/signup" element={<SignUp />} />

        {/* Ruta para la interfaz de Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App