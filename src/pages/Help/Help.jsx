import DashboardLayout from '../../components/layout/DashboardLayout';
import { Box, Layers, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="home-container">
        {/* Header de Bienvenida */}
        <div className="home-header">
          <h3 className="accent-title">¿Cómo estimar tu Proyecto de Fabricación?</h3>
        </div>
       
        {/* Sección del Proceso (Pasos) */}
        <div className="process-workflow">
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