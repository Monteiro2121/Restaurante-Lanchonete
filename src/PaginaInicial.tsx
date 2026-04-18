import React from "react";
import catupiry from "./assets/catupiry.jpg";
import maior from "./assets/maior.jpg";
import "./PaginaInicial.css";

// --- TIPAGEM ---
interface Hamburguer {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
}

// --- DADOS ---
const DESTAQUES: Hamburguer[] = [
  {
    id: 1,
    nome: "Gourmet Clássico",
    descricao: "Blend bovino 160g, queijo cheddar, bacon crocante e maionese da casa.",
    preco: "R$ 34,90",
    imagem: catupiry
  },
  {
    id: 2,
    nome: "Double Bacon Blast",
    descricao: "Dois blends 160g, dobro de bacon, cebola caramelizada e barbecue.",
    preco: "R$ 42,90",
    imagem: maior
  }
];

const BurgerCiaHome: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* IMAGEM DE FUNDO */}
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.1)' 
        }}
      ></div>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center px-6 z-10"> 
          <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block text-sm md:text-base">
            Dom Enzo • Aracaju
          </span>
          
          {/* Ajuste de tamanho de fonte responsivo: text-4xl no mobile, text-7xl no desktop */}
          <h1 className="text-4xl md:text-7xl font-black mb-6 text-white border-b-4 border-orange-500 italic leading-tight inline-block pb-2">
            O sabor que você merece
          </h1>
          
          <p className="text-gray-300 text-base md:text-xl max-w-md mb-10 mx-auto leading-relaxed">
            Elevando o nível do seu próximo pedido na Atalaia!
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://wa.me/5579996349409?text=Olá!%20Vi%20a%20loja%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-8 md:px-12 py-4 rounded-md font-black uppercase transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 shadow-xl hover:shadow-orange-500/40 text-sm md:text-base"
            >
              Fazer Pedido
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES */}
      <section id="menu" className="w-full py-20 bg-[#141414] relative z-10">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-2">Os mais pedidos</h2>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto"></div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {DESTAQUES.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#1a1a1a] p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-center border border-white/5 hover:border-orange-500/30 transition-all duration-300 group shadow-lg"
            >
              {/* Imagem do Burger */}
              <div className="w-full sm:w-40 md:w-48 aspect-square overflow-hidden rounded-xl shrink-0">
                <img 
                  src={item.imagem} 
                  alt={item.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              
              {/* Detalhes */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{item.nome}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2 md:line-clamp-none">
                  {item.descricao}
                </p>
                <div className="text-2xl md:text-3xl font-black text-orange-500">
                  {item.preco}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-10 border-t border-white/5 bg-[#0f0f0f] text-center px-6">
        <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.2em] uppercase leading-loose">
          Burger & Cia Gourmet • Rua Aloísio Campos, 248 • Atalaia • Aracaju/SE
        </p>
      </footer>
    </div>
  );
};

export default BurgerCiaHome;