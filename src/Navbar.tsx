import { Link } from "react-router-dom";
import './navbar.css';
import Logo from "./assets/logo.jpg";

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
            <Link to="/cardapio" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-orange-500 transition">
              Cardápio 
            </Link>
          </li>
          
          <li>
            <Link to="/endereço" className="text-sm font-bold uppercase tracking-widest text-orange-500 hover:text-orange-400 transition">
              Endereço
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}