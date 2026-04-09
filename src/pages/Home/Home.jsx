// src/pages/Home/Home.jsx
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="home-header">
        <h3 className="accent-title">Bienvenido(a)</h3>
      </div>
      
      {/* Aquí iría tu tabla o lista de proyectos como en la imagen */}
      <div className="projects-grid">
         {/* Tu lógica de renderizado */}
      </div>
    </DashboardLayout>
  );
}