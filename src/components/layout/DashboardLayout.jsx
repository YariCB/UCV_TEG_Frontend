import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import sampleIcon from '../../assets/sample.svg'
import pfp from '../../assets/pfp.png'
import { SearchContext } from '../../context/SearchContext';
import { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import { useModal } from '../../context/ModalContext';
import NewProjectModal from '../../pages/Projects/NewProjectModal';
import './DashboardLayout.css';

// Íconos de Lucide React
import { 
    Menu, Plus, Home, Folder, Layers, 
    Search, HelpCircle, Settings, LogOut 
} from 'lucide-react'; 

export default function DashboardLayout({ children }) {
    const { openModal } = useModal();

    const { isExpanded, toggle } = useContext(SidebarContext);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSidebar = () => toggle();
    const isActive = (path) => location.pathname === path;

    return (
        <div className={`dashboard-container ${isExpanded ? 'sidebar-expanded' : ''}`}>
        
        {/* Sombreado para responsive */}
        {isExpanded && (
            <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        )}
        
        {/* SIDEBAR */}
        <aside className="dashboard-sidebar">
            <div className="sidebar-top">
            <button className="icon-btn menu-toggle" onClick={toggleSidebar}>
                <Menu />
            </button>
            
            <nav className="nav-links">
                <button className="nav-item action-btn" onClick={() => openModal('project')}>
                <Plus fill={isActive('/new') ? "white" : "none"} />
                {isExpanded && <span>Nuevo proyecto</span>}
                </button>
                
                <Link to="/home" className={`nav-item ${isActive('/home') ? 'active' : ''}`}>
                <Home fill={isActive('/home') ? "white" : "none"} />
                {isExpanded && <span>Inicio</span>}
                </Link>
                
                <Link to="/projects" className={`nav-item ${isActive('/projects') ? 'active' : ''}`}>
                <Folder fill={isActive('/projects') ? "white" : "none"} />
                {isExpanded && <span>Proyectos</span>}
                </Link>
                
                <Link to="/materials" className={`nav-item ${isActive('/materials') ? 'active' : ''}`}>
                <Layers fill={isActive('/materials') ? "white" : "none"} />
                {isExpanded && <span>Materiales</span>}
                </Link>
            </nav>
            </div>

            <div className="sidebar-bottom">
            <button onClick={() => navigate('/login')} className="nav-item logout-btn">
                <LogOut />
                {isExpanded && <span>Cerrar sesión</span>}
            </button>
            </div>
        </aside>

        {/* ÁREA PRINCIPAL */}
        <main className="main-content">

            {/* NAVBAR */}
            <header className="dashboard-navbar">
            <div className="navbar-left">
                <div className="la-brand">
                    <div className="brand-icon"><img src={sampleIcon} alt="logo"/></div>
                    <span>NombreApp</span>
                </div>
            </div>

            <div className="navbar-center">
                <div className="search-bar">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Buscar proyecto por nombre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
            </div>

            <div className="navbar-right">
                <button className="icon-btn-muted"><HelpCircle size={20} /></button>
                <button className="icon-btn-muted"><Settings size={20} /></button>
                <div className="user-profile" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
                <img src={pfp} alt="Perfil" />
                </div>
            </div>
            </header>

            {/* CONTENIDO DE LA PÁGINA */}
            <section className="page-body">
                {children}
            </section>

            <NewProjectModal />
        </main>
        </div>
    );
}