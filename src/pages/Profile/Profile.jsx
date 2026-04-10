import React, { useState, useRef } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Camera, Undo2, Save } from 'lucide-react';
import openEyeIcon from '../../assets/openEye.png'
import closedEyeIcon from '../../assets/closedEye.png'
import './Profile.css';

export default function Profile() {
  const initial = {
    name: 'Yari',
    lastName: 'CB',
    email: 'yaricb.art@gmail.com',
    avatar: '/src/assets/pfp.png',
  };

  const [form, setForm] = useState({ ...initial, password: '', confirm: '' });
  const [avatarPreview, setAvatarPreview] = useState(initial.avatar);
  const fileRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onChange = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const onPickFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarPreview(url);
    setForm(f => ({ ...f, avatarFile: file }));
  };

  const onReset = () => {
    setForm({ ...initial, password: '', confirm: '' });
    setAvatarPreview(initial.avatar);
    setShowPassword(false);
    setShowConfirm(false);
    if (fileRef.current) fileRef.current.value = null;
  };

  const onSave = (e) => {
    e.preventDefault();
    if (form.password && form.password !== form.confirm) {
      alert('La nueva contraseña y su confirmación no coinciden');
      return;
    }
    // UI-only: simular guardado
    console.log('Datos a guardar:', form);
    alert('Cambios guardados correctamente (simulado)');
    // Limpiar campos de contraseña después de guardar
    setForm(f => ({ ...f, password: '', confirm: '' }));
    setShowPassword(false);
    setShowConfirm(false);
  };

  return (
    <DashboardLayout>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-card-header">
            <h2 className="accent-title">Mi Perfil</h2>
          </div>

          <form className="profile-form" onSubmit={onSave}>
            
            {/* SECCIÓN DE AVATAR CENTRADO */}
            <div className="avatar-section-centered">
              <div className="avatar-wrapper">
                <img src={avatarPreview} alt="avatar" className="profile-avatar-img" />
                <input ref={fileRef} type="file" accept="image/*" onChange={onPickFile} style={{display: 'none'}} />
                <button 
                  type="button" 
                  className="icon-btn-circle-floating" 
                  onClick={() => fileRef.current && fileRef.current.click()}
                  title="Cambiar foto"
                >
                  <Camera size={18} />
                </button>
              </div>
            </div>

            {/* SECCIÓN: DATOS PERSONALES */}
            <div className="profile-section">
              <div className="section-header">
                <h3>Datos personales</h3>
                <hr className="section-divider" />
              </div>
              
              <div className="section-body">
                <div className="input-group">
                  <label>Nombre</label>
                  <input type="text" value={form.name} onChange={(e) => onChange('name', e.target.value)} placeholder="Tu nombre" required />
                </div>

                <div className="input-group">
                  <label>Apellido</label>
                  <input type="text" value={form.lastName} onChange={(e) => onChange('lastName', e.target.value)} placeholder="Tu apellido" required />
                </div>

                <div className="input-group">
                  <label>Correo electrónico</label>
                  <input type="email" value={form.email} onChange={(e) => onChange('email', e.target.value)} placeholder="tu@correo.com" required />
                </div>
              </div>
            </div>

            {/* SECCIÓN: CONTRASEÑA */}
            <div className="profile-section">
              <div className="section-header">
                <h3>Cambio de Contraseña</h3>
                <hr className="section-divider" />
              </div>
            
              <div className="section-body row two">
                {/* Campo Nueva Contraseña con Ojo */}
                <div className="input-group">
                  <label>Nueva contraseña <span className="required">*</span></label>
                  <div className="password-input-wrapper">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={form.password} 
                      onChange={(e) => onChange('password', e.target.value)} 
                      placeholder="Mínimo 8 caracteres"
                      minLength={8}
                    />
                    <button 
                      type="button" 
                      className="toggle-password-btn" 
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex="-1"
                    >
                        <img 
                            src={showPassword ? openEyeIcon : closedEyeIcon} // Icono dinámico
                            alt="" 
                        />
                    </button>
                  </div>
                </div>

                {/* Campo Confirmar Contraseña con Ojo */}
                <div className="input-group">
                  <label>Confirmar nueva contraseña <span className="required">*</span></label>
                  <div className="password-input-wrapper">
                    <input 
                      type={showConfirm ? "text" : "password"} 
                      value={form.confirm} 
                      onChange={(e) => onChange('confirm', e.target.value)} 
                      placeholder="Repita la contraseña"
                    />
                    <button 
                      type="button" 
                      className="toggle-password-btn" 
                      onClick={() => setShowConfirm(!showConfirm)}
                      tabIndex="-1"
                    >
                        <img 
                            src={showConfirm ? openEyeIcon : closedEyeIcon} // Icono dinámico
                            alt="" 
                        />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTONES DE ACCIÓN FINAL */}
            <div className="actions-row-sticky">
              <button type="button" className="btn white icon-left" onClick={onReset}>
                <Undo2 size={18} /> Deshacer cambios
              </button>
              <button type="submit" className="btn primary icon-left">
                <Save size={18} /> Guardar cambios
              </button>
            </div>

          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}