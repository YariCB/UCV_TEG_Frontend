import React, { useState, useMemo, useContext } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Plus, Eye, Edit3, Trash2, ChevronUp, ChevronDown, Layers } from 'lucide-react';
import './Materials.css';
import SearchContext from '../../context/SearchContext';
import { useModal } from '../../context/ModalContext';
import NewMaterialModal from './NewMaterialModal';

const MATERIAL_TYPES = ['Todos', 'Madera', 'Vidrio', 'Metal', 'Plástico', 'Papel', 'Filamento'];

export default function Materials() {
  const [activeType, setActiveType] = useState('Todos');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const { searchTerm } = useContext(SearchContext);

  const initialMaterials = [
    { id:1, name: 'ABS Negro', classification: 'Filamento', cost: 16.00, weight: 1000, metraje: '1 kg' },
    { id:2, name: 'Acero Inoxidable 304', classification: 'Metal', cost: 45.00, weight: 7850, metraje: '1 m²' },
    { id:3, name: 'Aluminio 6061-T6', classification: 'Metal', cost: 32.00, weight: 2700, metraje: '1 kg' },
    { id:4, name: 'Cartón Corrugado', classification: 'Papel', cost: 3.20, weight: 640, metraje: '1 m²' },
    { id:5, name: 'MDF 15 mm', classification: 'Madera', cost: 12.50, weight: 2400, metraje: '1 m²' },
    { id:6, name: 'PETG Transparente', classification: 'Filamento', cost: 22.00, weight: 1240, metraje: '1 kg' },
    { id:7, name: 'PLA Blanco', classification: 'Plástico', cost: 18.00, weight: 1000, metraje: '1000 por unidad' },
    { id:8, name: 'Pino Cepillado', classification: 'Madera', cost: 8.00, weight: 1200, metraje: '1 m lineal' },
    { id:9, name: 'Polipropileno', classification: 'Plástico', cost: 9.50, weight: 900, metraje: '1 m²' },
    { id:10, name: 'Vidrio Templado 6 mm', classification: 'Vidrio', cost: 55.00, weight: 1500, metraje: '1 m²' },
  ];

  const { openModal, closeModal } = useModal();

  const [materials, setMaterials] = useState(initialMaterials);

  const [modalMode, setModalMode] = useState(null); // 'create' | 'view' | 'edit' | null
  const [modalMaterial, setModalMaterial] = useState(null);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  const sorted = useMemo(() => {
    const items = [...materials];
    if (!sortConfig.key) return items;
    items.sort((a,b) => {
      let aVal = a[sortConfig.key];
      let bVal = b[sortConfig.key];

      // numeric keys
      if (sortConfig.key === 'cost' || sortConfig.key === 'weight') {
        aVal = Number(aVal || 0);
        bVal = Number(bVal || 0);
      }

      // metraje: try parse leading number
      if (sortConfig.key === 'metraje') {
        const pa = parseFloat(String(aVal).replace(/[^0-9\.]/g, '')) || 0;
        const pb = parseFloat(String(bVal).replace(/[^0-9\.]/g, '')) || 0;
        aVal = pa; bVal = pb;
      }

      if (typeof aVal === 'string') aVal = aVal.toLowerCase();
      if (typeof bVal === 'string') bVal = bVal.toLowerCase();

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return items;
  }, [sortConfig]);

  const filteredByType = useMemo(() => {
    if (activeType === 'Todos') return sorted;
    return sorted.filter(m => m.classification === activeType);
  }, [sorted, activeType]);

  const openCreateModal = () => {
    setModalMode('create');
    setModalMaterial(null);
    openModal('material');
  };

  const openViewModal = (m) => {
    setModalMode('view');
    setModalMaterial(m);
    openModal('material');
  };

  const openEditModal = (m) => {
    setModalMode('edit');
    setModalMaterial(m);
    openModal('material');
  };

  const handleDelete = (id) => {
    setMaterials(prev => prev.filter(x => x.id !== id));
  };

  const handleSaveMaterial = (mat) => {
    if (!mat) return;
    if (modalMode === 'create') {
      setMaterials(prev => [{ ...mat, id: Date.now() }, ...prev]);
    } else if (modalMode === 'edit') {
      setMaterials(prev => prev.map(x => x.id === mat.id ? mat : x));
    }
    closeModal();
    setModalMode(null);
    setModalMaterial(null);
  };

  const filteredBySearch = useMemo(() => {
    const q = (searchTerm || '').trim().toLowerCase();
    if (!q) return filteredByType;
    return filteredByType.filter(m => m.name.toLowerCase().includes(q));
  }, [filteredByType, searchTerm]);

  const SortIcons = ({ columnKey }) => {
    const isActive = sortConfig.key === columnKey;
    return (
      <div className="sort-icons-wrapper">
        <ChevronUp size={12} style={{ opacity: isActive && sortConfig.direction === 'asc' ? 1 : 0.3 }} />
        <ChevronDown size={12} style={{ opacity: isActive && sortConfig.direction === 'desc' ? 1 : 0.3 }} />
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="materials-container">
        <div className="materials-header">
            <div className="header-left">
                <div>
                    <h2 className="accent-title">Materiales</h2>
                    <p className="muted small">{initialMaterials.length} materiales en total</p>
                </div>
            </div>
          
            <button className="btn primary icon-left" onClick={openCreateModal}>
              <Plus size={18} /> Nuevo Material
            </button>
        </div>

        <div className="materials-filters">
          <div className="chips">
            {MATERIAL_TYPES.map(t => {
              const key = String(t).toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').replace(/\s+/g, '')
              const colorKey = t.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').replace(/\s+/g, '');
              return (
                <button
                  key={t}
                  className={`chip ${activeType===t? 'active':''} ${key}`}
                  onClick={() => setActiveType(t)}
                >
                    {t !== 'Todos' && <span className={`filter-circle ${colorKey}`}></span>}
                    {t}
                </button>
              )
            })}
          </div>
        </div>

        <div className="materials-table-card">
          <table className="materials-table">
            <thead>
                <tr>
                    <th className="col-mat-name clickable" onClick={() => requestSort('name')}>Material <SortIcons columnKey="name"/></th>
                    <th className="col-mat-type clickable" onClick={() => requestSort('classification')}>Clasificación <SortIcons columnKey="classification"/></th>
                    <th className="col-mat-cost clickable" onClick={() => requestSort('cost')}>Costo Unitario <SortIcons columnKey="cost"/></th>
                    <th className="col-mat-weight clickable" onClick={() => requestSort('weight')}>Peso base <SortIcons columnKey="weight"/></th>
                    <th className="col-mat-metraje clickable" onClick={() => requestSort('metraje')}>Metraje / Costo <SortIcons columnKey="metraje"/></th>
                    <th className="col-mat-actions">Acciones</th>
                </tr>
            </thead>
            <tbody>
              {filteredBySearch.map(m => (
                  <tr key={m.id}>
                    <td className="table-name-cell" data-label="Nombre">
                      <div className="file-icon-bg"><Layers size={16} /></div>
                      <span>{m.name}</span>
                    </td>
                    <td data-label="Clasificación">
                    {(() => {
                      const key = m.classification.toLowerCase().normalize('NFD').replace(/[^\w\s-]/g, '').replace(/\s+/g, '')
                      return <span className={`status-tag ${key}`}>{m.classification}</span>
                    })()}
                  </td>
                    <td className="cost" data-label="Costo (USD)">${m.cost.toFixed(2)}</td>
                    <td className="muted" data-label="Peso (g)">{m.weight.toLocaleString()} g</td>
                    <td data-label="Metraje / Costo"><span className="metraje-chip">{m.metraje}</span></td>
                    <td className="table-actions" data-label="Acciones">
                      {/* <button className="action-btn-circle view" onClick={() => openViewModal(m)}><Eye size={16}/></button> */}
                      <button className="action-btn-circle edit" onClick={() => openEditModal(m)}><Edit3 size={16}/></button>
                      <button className="action-btn-circle delete" onClick={() => handleDelete(m.id)}><Trash2 size={16}/></button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
        <NewMaterialModal mode={modalMode} material={modalMaterial} onSave={handleSaveMaterial} />
      </div>
    </DashboardLayout>
  );
}
