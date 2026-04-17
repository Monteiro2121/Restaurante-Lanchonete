import { useState } from "react";
import { Link } from "react-router-dom";

// Exemplo de dados (Pode ser movido para um arquivo JSON depois)
const CATEGORIAS = ["Burgers", "Acompanhamentos", "Bebidas", "Sobremesas"];

const PRODUTOS = [
  {
    id: 1,
    categoria: "Burgers",
    nome: "Code Breaker",
    preco: "R$ 42,90",
    desc: "2 blends de 160g, queijo monterey jack, bacon caramelizado no bourbon e cebola crispy.",
    tag: "Best Seller"
  },
  {
    id: 2,
    categoria: "Burgers",
    nome: "Stack Overflow",
    preco: "R$ 48,00",
    desc: "3 blends bovinos, cheddar triplo, picles da casa e maionese secreta no pão brioche.",
    tag: "Bruto"
  },
  {
    id: 3,
    categoria: "Acompanhamentos",
    nome: "Binary Fries",
    preco: "R$ 22,00",
    desc: "Batatas rústicas com páprica defumada, alecrim e dip de alho poró.",
  },
  {
    id: 4,
    categoria: "Bebidas",
    nome: "Bug Fixer Lemonade",
    preco: "R$ 14,00",
    desc: "Limonada artesanal com extrato de blueberry e gelo triturado.",
  }
];

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Burgers");

  const produtosFiltrados = PRODUTOS.filter(p => p.categoria === categoriaAtiva);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      
      {/* HEADER DO CARDÁPIO */}
      <section className="py-20 bg-gradient-to-b from-orange-600/20 to-transparent text-center">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
          Nosso <span className="text-orange-500">Menu</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto px-6">
          Ingredientes selecionados e preparo artesanal. Escolha sua stack de hoje.
        </p>
      </section>

      {/* NAVEGAÇÃO DE CATEGORIAS (TABS) */}
      <nav className="sticky top-20 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="flex justify-center gap-4 overflow-x-auto px-6 no-scrollbar">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                categoriaAtiva === cat 
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" 
                : "text-gray-500 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* LISTA DE PRODUTOS */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {produtosFiltrados.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-500 flex justify-between items-start"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-black uppercase italic">{item.nome}</h3>
                  {item.tag && (
                    <span className="bg-orange-600 text-[10px] font-bold px-2 py-1 rounded italic uppercase">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
                  {item.desc}
                </p>
                <span className="text-2xl font-black text-orange-500">{item.preco}</span>
              </div>

              {/* Espaço para foto se tiver, ou um ícone visual */}
              <div className="w-24 h-24 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">🍔</span> 
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA FIXO NO MOBILE */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center px-6 z-50">
        <Link 
          to="/" 
          className="bg-white text-black w-full max-w-md py-4 rounded-xl font-black text-center uppercase shadow-2xl hover:bg-orange-500 hover:text-white transition-all active:scale-95"
        >
          Voltar para Início
        </Link>
      </div>
    </div>
  );
}