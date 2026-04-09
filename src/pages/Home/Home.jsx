import DashboardLayout from '../../components/layout/DashboardLayout';
import { Box, Layers, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="home-container">
        {/* Header de Bienvenida */}
        <div className="home-header centered">
          <h3 className="accent-title">¿Qué vamos a estimar hoy?</h3>
        </div>

        {/* Grid de Estadísticas Rápidas */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon purple"><Box size={20} /></div>
            <div className="stat-info">
              <span className="stat-value">12</span>
              <span className="stat-label">Proyectos Totales</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon orange"><Clock size={20} /></div>
            <div className="stat-info">
              <span className="stat-value">3</span>
              <span className="stat-label">En Proceso</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon blue"><Layers size={20} /></div>
            <div className="stat-info">
              <span className="stat-value">10</span>
              <span className="stat-label">Materiales Registrados</span>
            </div>
          </div>
        </div>

        {/* Sección de Proyectos Recientes */}
        <div className="section-header">
          <h3 className="accent-text">Proyectos Recientes</h3>
          <Link to="/projects" className="back-link-style" style={{ textDecoration: 'none' }}>
              <span>Ver todos</span>
              <ArrowRight size={18} className="arrow-icon" /> 
          </Link>
        </div>
        
        <div className="recent-projects-grid">
          {/* Card de ejemplo 1 */}
          <div className="project-preview-card">
            <div className="preview-thumbnail">
              <div className="mesh-placeholder">3D Preview</div>
            </div>
            <div className="preview-info">
              <h4>Escritorio Estudiante</h4>
              <p>Estimación: $45.50</p>
              <span className="status-tag completed">Completado</span>
            </div>
          </div>
          {/* Card de ejemplo 2 */}
          <div className="project-preview-card">
            <div className="preview-thumbnail">
              <div className="mesh-placeholder">3D Preview</div>
            </div>
            <div className="preview-info">
              <h4>Estrella Mario Bros</h4>
              <p>Estimación: --</p>
              <span className="status-tag processing">Analizando...</span>
            </div>
          </div>
        </div>

        {/* Sección del Proceso (Pasos) */}
        <div className="process-workflow">
          <h3 className="accent-text">¿Cómo funciona la estimación?</h3>
          <div className="workflow-steps muted-bg">
            <div className="step">
              <div className="step-number">1</div>
              <p>Carga del modelo 3D</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">2</div>
              <p>Análisis de geometría</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">3</div>
              <p>Selección de material</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">4</div>
              <p>Reporte de costos final</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}