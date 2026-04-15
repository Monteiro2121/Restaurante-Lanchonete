import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const HoverLink = ({ to, children }) => (
  <Link to={to} className="hover-link">
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative', left: '2px' }}>
            </div>
        
        <ul className="navbar-links">
          <li>
            <Link to="/Dashboard" className="nav-dash-link" data-text="Cardápio">
                Cardápio 
            </Link>
          </li>
          
          <li>
            <Link to="/" className="btn-sair text-orange-500 font-bold">
              Endereço
            </Link>
          </li>

          <li style={{ position: 'relative' }}>
            <span className="nav-relatorios-span">
              Contatos <span style={{ fontSize: '10px' }}>▼</span>
            </span>
            
            <div className="dropdown-menu">
              <HoverLink to="/FolhaComparativa">(79) 999.999-999</HoverLink>
              <HoverLink to="/RelatorioInss">(79) 707070 7070</HoverLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}