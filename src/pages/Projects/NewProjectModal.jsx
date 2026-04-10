import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import uploadIcon from '../../assets/upload.svg';
import { Box } from 'lucide-react';
import './NewProjectModal.css';

export default function NewProjectModal() {
  const { modalState, closeModal } = useModal();

  if (!modalState?.open || modalState.type !== 'project') return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="accent-title">Nuevo Proyecto</h2>
          <p className="muted">Sube un objeto 3D para crear un nuevo proyecto</p>
          <button className="close-btn" onClick={closeModal}><X size={20} /></button>
        </div>

        <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
          <div className="upload-zone">
            <div className="upload-inner">
              <div className="upload-icon-rect">
                <Box size={40} />
              </div>

              <button type="button" className="btn-primary-modal upload-btn">
                <img src={uploadIcon} alt="upload" className="upload-btn-icon" />
                Cargar Objeto
              </button>

              <p className="muted small">o arrastra y suelta tu archivo aquí</p>

              <div className="divider" />

              <div className="extensions-chips">
                <span className="extension-chip">.blend</span>
                <span className="extension-chip">.obj</span>
                <span className="extension-chip">.glb</span>
                <span className="extension-chip">.gltf</span>
                <span className="extension-chip">.stl</span>
              </div>

              <p className="muted small">Se aceptan objetos de hasta <strong>10 submallados</strong></p>
            </div>

            <input type="file" className="file-input" accept=".blend,.obj,.glb,.gltf,.stl" />
          </div>
        </form>
      </div>
    </div>
  );
}