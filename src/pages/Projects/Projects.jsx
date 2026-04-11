import React, { useState, useMemo, useContext } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { 
  Plus, LayoutGrid, List, Eye, Edit3, Trash2, 
  MoreVertical, Box, ChevronUp, ChevronDown 
} from 'lucide-react';
import './Projects.css';
import SearchContext from '../../context/SearchContext';
import { useModal } from '../../context/ModalContext';
import NewProjectModal from './NewProjectModal';

export default function Projects() {
  const { openModal } = useModal();

  const [viewMode, setViewMode] = useState('table');
  
  // Estado para el ordenamiento
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const initialProjects = [
    { id: 1, name: "Escritorio Estudiante", version: "v1.0", date: "12 Oct 2025", status: "Completado" },
    { id: 2, name: "Estrella Mario Bros", version: "v2.1", date: "05 Nov 2025", status: "Procesando" },
    { id: 3, name: "Silla de Madera", version: "v1.0", date: "10 Nov 2025", status: "Completado" },
    { id: 4, name: "Taza", version: "v3.0", date: "15 Nov 2025", status: "Completado" },
  ];

  // Lógica de ordenamiento
  const sortedProjects = useMemo(() => {
    let sortableItems = [...initialProjects];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Tratamiento especial para fechas (convertir string a objeto Date)
        if (sortConfig.key === 'date') {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  // Filtrar por término de búsqueda desde el navbar
  const { searchTerm } = useContext(SearchContext);

  const filteredProjects = useMemo(() => {
    if (!searchTerm || searchTerm.trim() === '') return sortedProjects;
    const q = searchTerm.toLowerCase();
    return sortedProjects.filter(p => p.name.toLowerCase().includes(q));
  }, [sortedProjects, searchTerm]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Flechas de ordenamiento con feedback visual
  const SortIcons = ({ columnKey }) => {
    const isActive = sortConfig.key === columnKey;
    return (
      <div className="sort-icons-wrapper">
        <ChevronUp 
          size={12} 
          style={{ opacity: isActive && sortConfig.direction === 'asc' ? 1 : 0.3 }} 
        />
        <ChevronDown 
          size={12} 
          style={{ opacity: isActive && sortConfig.direction === 'desc' ? 1 : 0.3 }} 
        />
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="projects-container">
        <div className="projects-header">
          <div className="header-left">
            <h2 className="accent-title">Proyectos de Fabricación</h2>
            <p className="muted small">Tienes {initialProjects.length} proyectos guardados</p>
          </div>
          <button className="btn primary icon-left" onClick={() => openModal('project')}>
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
                    <th className="col-name clickable" onClick={() => requestSort('name')}>
                      <div className="th-content">Nombre <SortIcons columnKey="name" /></div>
                    </th>
                    <th className="col-version clickable" onClick={() => requestSort('version')}>
                      <div className="th-content">Versión <SortIcons columnKey="version" /></div>
                    </th>
                    <th className="col-date clickable" onClick={() => requestSort('date')}>
                      <div className="th-content">Modificado <SortIcons columnKey="date" /></div>
                    </th>
                    <th className="col-actions text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map(proj => (
                    <tr key={proj.id}>
                      <td className="table-name-cell">
                        <div className="project-name-wrapper">
                          <div className="file-icon-bg"><Box size={16} /></div>
                          <span className="project-name-text">{proj.name}</span>
                        </div>
                      </td>
                      <td><span className="version-tag">{proj.version}</span></td>
                      <td className="muted">{proj.date}</td>
                      <td className="table-actions">
                        <div className="table-actions-inner">
                          <button className="action-btn-circle view"><Eye size={16} /></button>
                          <button className="action-btn-circle edit"><Edit3 size={16} /></button>
                          <button className="action-btn-circle delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="projects-grid-view">
              {filteredProjects.map(proj => (
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