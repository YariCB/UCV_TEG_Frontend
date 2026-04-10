import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import './NewMaterialModal.css';

const CLASS_OPTIONS = ['Madera', 'Vidrio', 'Metal', 'Plástico', 'Papel', 'Filamento'];
const UNIT_OPTIONS = ['kg', 'm²', 'm lineal', 'por unidad'];

export default function NewMaterialModal({ mode, material, onSave }) {
  const { modalState, closeModal } = useModal();
  const isVisible = modalState?.open && modalState.type === 'material' && mode;

  const [classification, setClassification] = useState('');
  const [name, setName] = useState('');
  const [cost, setCost] = useState('0.00');
  const [weight, setWeight] = useState('0');
  const [metrajeValue, setMetrajeValue] = useState('1');
  const [metrajeUnit, setMetrajeUnit] = useState(UNIT_OPTIONS[0]);

  useEffect(() => {
    if (material) {
      setClassification(material.classification || '');
      setName(material.name || '');
      setCost(material.cost != null ? String(material.cost) : '0.00');
      setWeight(material.weight != null ? String(material.weight) : '0');
      // try to split material.metraje into value + unit
      if (material.metraje) {
        const parts = String(material.metraje).split(/\s+/);
        setMetrajeValue(parts[0] || '1');
        setMetrajeUnit(parts.slice(1).join(' ') || UNIT_OPTIONS[0]);
      } else {
        setMetrajeValue('1');
        setMetrajeUnit(UNIT_OPTIONS[0]);
      }
    } else {
      // reset
      setClassification('');
      setName('');
      setCost('0.00');
      setWeight('0');
      setMetrajeValue('1');
      setMetrajeUnit(UNIT_OPTIONS[0]);
    }
  }, [material, mode]);

  if (!isVisible) return null;

  const isView = mode === 'view';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isView) return;
    const mat = {
      id: material?.id,
      classification,
      name,
      cost: parseFloat(cost) || 0,
      weight: parseFloat(weight) || 0,
      metraje: `${metrajeValue} ${metrajeUnit}`,
    };
    if (onSave) onSave(mat);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="accent-title">{isView ? 'Ver material' : (mode === 'edit' ? 'Editar material' : 'Nuevo Material')}</h2>
          <p className="muted">{isView ? 'Información del material' : 'Completa los datos del nuevo material'}</p>
          <button className="close-btn" onClick={closeModal}><X size={20} /></button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Clasificación <span className="required">*</span></label>
            <select value={classification} onChange={(e) => setClassification(e.target.value)} disabled={isView}>
              <option value="">Seleccionar...</option>
              {CLASS_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="input-group">
            <label>Nombre del material <span className="required">*</span></label>
            <input type="text" placeholder="Ej: MDF 15 mm, Acero Inoxidable..." value={name} onChange={(e) => setName(e.target.value)} disabled={isView} />
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <div className="input-group" style={{ flex: 1 }}>
              <label>Costo (USD) <span className="required">*</span></label>
              <input type="number" step="0.01" value={cost} onChange={(e) => setCost(e.target.value)} disabled={isView} />
            </div>
            <div className="input-group" style={{ flex: 1 }}>
              <label>Peso (g) <span className="required">*</span></label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} disabled={isView} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div className="input-group" style={{ flex: 1 }}>
              <label>Metraje por costo <span className="required">*</span></label>
              <input type="text" value={metrajeValue} onChange={(e) => setMetrajeValue(e.target.value)} disabled={isView} />
            </div>
            <div className="input-group" style={{ width: 140 }}>
              <label>&nbsp;</label>
              <select value={metrajeUnit} onChange={(e) => setMetrajeUnit(e.target.value)} disabled={isView}>
                {UNIT_OPTIONS.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-ghost" onClick={closeModal}>Cancelar</button>
            {!isView && <button type="submit" className="btn-primary-modal">{mode === 'edit' ? 'Guardar cambios' : 'Guardar material'}</button>}
          </div>
        </form>
      </div>
    </div>
  );
}
