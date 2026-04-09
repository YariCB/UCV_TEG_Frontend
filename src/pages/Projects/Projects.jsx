import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Plus, LayoutGrid, List, Eye, Edit3, Trash2, 
  MoreVertical, Box, ChevronUp, ChevronDown 
} from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [viewMode, setViewMode] = useState('table');
  
  const projects = [
    { id: 1, name: "Escritorio Estudiante", version: "v1.0", date: "12 Oct 2025", status: "Completado" },
    { id: 2, name: "Estrella Mario Bros", version: "v2.1", date: "05 Nov 2025", status: "Procesando" },
    { id: 3, name: "Silla de Madera", version: "v1.0", date: "10 Nov 2025", status: "Completado" },
    { id: 4, name: "Taza", version: "v3.0", date: "15 Nov 2025", status: "Completado" },
  ];

  // Flechas de ordenamiento
  const SortIcons = () => (
    <div className="sort-icons-wrapper">
      <ChevronUp size={12} className="sort-icon" />
      <ChevronDown size={12} className="sort-icon" />
    </div>
  );

  return (
    <DashboardLayout>
      <div className="projects-container">
        <div className="projects-header">
          <div className="header-left">
            <h2 className="accent-title">Proyectos de Fabricación</h2>
            <p className="muted small">Tienes {projects.length} proyectos guardados</p>
          </div>
          <button className="btn primary icon-left">
            <Plus size={18} /> Nuevo Proyecto
          </button>
        </div>

        <div className="view-selector-container">
          <div className="view-modes">
            <button 
              className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
            >
              <List size={18} /> Tabla
            </button>
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid size={18} /> Cards
            </button>
          </div>
        </div>

        <div className="projects-content">
          {viewMode === 'table' ? (
            <div className="table-responsive">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th className="col-name clickable">
                      <div className="th-content">Nombre <SortIcons /></div>
                    </th>
                    <th className="col-version clickable">
                      <div className="th-content">Versión <SortIcons /></div>
                    </th>
                    <th className="col-date clickable">
                      <div className="th-content">Modificado <SortIcons /></div>
                    </th>
                    <th className="col-actions text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(proj => (
                    <tr key={proj.id}>
                      <td className="table-name-cell">
                        <div className="file-icon-bg"><Box size={16} /></div>
                        {proj.name}
                      </td>
                      <td><span className="version-tag">{proj.version}</span></td>
                      <td className="muted">{proj.date}</td>
                      <td className="table-actions">
                        <button className="action-btn-circle view"><Eye size={16} /></button>
                        <button className="action-btn-circle edit"><Edit3 size={16} /></button>
                        <button className="action-btn-circle delete"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="projects-grid-view">
              {projects.map(proj => (
                <div key={proj.id} className="project-preview-card">
                  <div className="preview-thumbnail">
                    <div className="mesh-placeholder">3D Preview</div>
                  </div>
                  <div className="preview-info">
                    <h4>{proj.name}</h4>
                    <p>Versión: {proj.version}</p>
                    <div className="card-footer">
                       <span className={`status-tag ${proj.status === 'Completado' ? 'completed' : 'processing'}`}>
                        {proj.status}
                       </span>
                       <button className="icon-btn-muted"><MoreVertical size={16}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}