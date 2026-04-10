import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Materials from './pages/Materials/Materials'
import Profile from './pages/Profile/Profile'
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

        {/* Ruta para Restablecer Contraseña */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Ruta para el Home */}
        <Route path="/home" element={<Home />} />

        {/* Ruta para la página de Proyectos */}
        <Route path="/projects" element={<Projects />} />
        
        {/* Ruta para la página de Materiales */}
        <Route path="/materials" element={<Materials />} />
        {/* Ruta para perfil */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App