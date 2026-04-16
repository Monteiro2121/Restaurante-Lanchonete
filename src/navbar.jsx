import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import Logo from "./assets/logo.jpg";

// Componente auxiliar para os links do dropdown
const HoverLink = ({ to, children }) => (
  <Link to={to} className="block px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors duration-200">
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <nav className="w-full bg-[#000000] backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      {/* Container que centraliza o conteúdo e define a largura máxima */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO (Lado Esquerdo) */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={Logo} 
              alt="Burger & Cia" 
              className="h-12 w-auto object-contain transition-transform hover:scale-110" 
              style={{ transform: 'scale(1.4)' }} // Mantive o seu scale, mas cuidado para não cortar a imagem
            />
          </Link>
        </div>

        {/* LINKS (Lado Direito / Centralizados conforme o espaço) */}
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          <li>
            <Link to="/Dashboard" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-orange-500 transition">
              Cardápio 
            </Link>
          </li>
          
          <li>
            <Link to="/" className="text-sm font-bold uppercase tracking-widest text-orange-500 hover:text-orange-400 transition">
              Endereço
            </Link>
          </li>

          {/* DROPDOWN DE CONTATOS */}
          <li className="relative group">
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-300 group-hover:text-white transition">
              Contatos <span className="text-[10px]">▼</span>
            </button>
            
            {/* Menu Dropdown - Aparece no Hover da 'li' */}
            <div className="absolute center-0 mt-2 w-40 bg-[#1a1a1a] color-white border border-white/10 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <HoverLink to="#">(79) 99999-9999</HoverLink>
              <HoverLink to="#">(79) 98888-8888</HoverLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}