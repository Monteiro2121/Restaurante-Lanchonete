import imgDuplo from "./assets/duplo.jpg";
import bigger from "./assets/bigger.jpg";
import "./PaginaInicial.css";;

// --- TIPAGEM ---
interface Hamburguer {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
  }
  
  // --- DADOS FICTÍCIOS (BASEADOS NO CARDÁPIO DELES) ---
  const DESTAQUES: Hamburguer[] = [
    {
      id: 1,
      nome: "Gourmet Clássico",
      descricao: "Blend bovino 160g, queijo cheddar, bacon crocante e maionese da casa.",
      preco: "R$ 34,90",
      imagem: bigger
    },
    {
      id: 2,
      nome: "Double Bacon Blast",
      descricao: "Dois blends 160g, dobro de bacon, cebola caramelizada e barbecue.",
      preco: "R$ 42,90",
      imagem: imgDuplo
    }
  ];
  
  const BurgerCiaHome: React.FC = () => {
    return (
      // 1. GARANTIR QUE O CONTÊINER PRINCIPAL OCUPE TODA A TELA
      <div className="w-screen min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
  {/* IMAGEM DE FUNDO VIA URL */}
        <div 
            className="absolute inset-15 z-0 opacity-30" 
            style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5) contrast(1.1)' // Deixa a imagem escura para o texto ficar legível
            }}
        ></div>
        {/* 2. HERO SECTION - INDUSTRIAL GOURMET (OCUPANDO TODA A LARGURA) */}
        <section className="w-full relative h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Aumentei o max-w para o título não quebrar tanto e mantive o mx-auto */}
            <div className="max-w-2xl mx-auto text-center px-8"> 
                <div>
                <span className="text-orange-500 font-bold tracking-[0.64px] uppercase mb-3 block">
                    Burger & Cia Gourmet • Aracaju
                </span>
                
                <h1 className="text-7xl md:text-7xl font-black mb-6 text-orange border-b-4 border-orange-500 italic">
                    O sabor que você merece
                </h1>
                
                {/* mx-auto aqui centraliza o parágrafo se ele for menor que a largura total */}
                <p className="text-gray-300 text-lg max-w-md mb-8 mx-auto">
                Elevando o nível do seu próximo pedido!
                </p>
                
                {/* Substitua o seu botão anterior por este bloco */}
                  <div className="w-full flex justify-center">
                    <a 
                      href="https://wa.me/5579996349409?text=Olá!%20Vi%20a%20loja%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black px-10 py-4 rounded-md font-black uppercase transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/50"
                    >
                      Fazer Pedido
                    </a>
                  </div>
                </div>
                
                {/* Imagem centralizada logo abaixo do conteúdo */}
                <div className="relative flex justify-center mt-12">
                <div className="absolute w-54 h-54 bg-orange-500/20 blur-[100px] rounded-full"></div>
                <img 
                    src="/burger-hero.png" 
                    alt="Hambúrguer Gourmet" 
                    className="relative z-10 w-full max-w-xs md:max-w-sm drop-shadow-[20px_35px_35px_rgba(0,0,0,0.5)] animate-bounce-slow"
                />
                </div>
            </div>
            </section>
  
        {/* 3. SEÇÃO DE DESTAQUES (TAMBÉM OCUPANDO TODA A LARGURA COM FUNDO PRETO) */}
        <section id="menu" className="w-full py-34 bg-[#141414]">
          <div className="container mx-auto px-8 text-center mb-20">
            <h2 className="text-4xl font-black uppercase italic mb-1">Os mais pedidos</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
  
          <div className="container mx-auto px-8 grid md:grid-cols-2 gap-8">
            {DESTAQUES.map((item) => (
              <div key={item.id} className="bg-[#1a1a1a] p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center border border-white/5 hover:border-orange-500/50 transition group">
                <div className="w-full md:w-45 aspect-square overflow-hidden rounded-xl">
                   <img src={item.imagem} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{item.nome}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.descricao}</p>
                  <div className="text-2xl font-black text-orange-500">{item.preco}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* 4. FOOTER (TAMBÉM OCUPANDO TODA A LARGURA) */}
        <footer className="w-full py-12 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            Burger & Cia Gourmet • Rua Aloísio Campos, 248 • Atalaia
          </p>
        </footer>
      </div>
    );
  };
  
  export default BurgerCiaHome;