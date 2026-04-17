import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import Logo from "./assets/logo.jpg";

const HoverLink = ({ to, children }) => (
  <Link to={to} className="block px-4 py-2 text-sm text-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300">
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <nav className="w-full bg-[#000000] backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO COM ANIMAÇÃO SUAVE */}
        <div className="flex items-center">
          <Link to="/" className="group">
            <img 
              src={Logo} 
              alt="Burger & Cia" 
              className="h-12 w-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110" 
              style={{ transform: 'scale(1.4)' }} 
            />
          </Link>
        </div>

        {/* LINKS */}
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          <li>
            <Link to="/cardapio" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-orange-500 transition-all duration-300">
              Cardápio 
            </Link>
          </li>
          
          <li>
            <Link to="/endereço" className="text-sm font-bold uppercase tracking-widest text-orange-500 hover:text-orange-400 transition-all duration-300">
              Endereço
            </Link>
          </li>

          {/* DROPDOWN DE CONTATOS */}
          {/* <li className="relative group">
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-all duration-300">
              Contatos <span className="text-[10px]">▼</span>
            </button>
            
            <div className="absolute right-0 mt-2 w-44 bg-[#141414] border border-white/10 rounded-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="py-2">
                <HoverLink to="#">(79) 99999-9999</HoverLink>
                <HoverLink to="#">(79) 98888-8888</HoverLink>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}