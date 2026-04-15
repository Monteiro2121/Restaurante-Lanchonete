import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
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
      imagem: "/burger-1.jpg" // Coloque fotos suculentas aqui
    },
    {
      id: 2,
      nome: "Double Bacon Blast",
      descricao: "Dois blends 160g, dobro de bacon, cebola caramelizada e barbecue.",
      preco: "R$ 42,90",
      imagem: "/burger-2.jpg"
    }
  ];
  
  const BurgerCiaHome: React.FC = () => {
    return (
      // 1. GARANTIR QUE O CONTÊINER PRINCIPAL OCUPE TODA A TELA
      <div className="w-screen min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
  
        {/* 2. HERO SECTION - INDUSTRIAL GOURMET (OCUPANDO TODA A LARGURA) */}
        <section className="w-full relative h-[85vh] flex items-center overflow-hidden">
          {/* O container interno mantém o conteúdo alinhado, mas o fundo preto da section agora ocupa 100% */}
          <div className="max-w-md mx-auto text-center">
            <div>
              <span className="text-orange-500 font-bold tracking-[0.32px] uppercase mb-12 ">
              Burger & Cia Gourmet • Aracaju
              </span>
              <h1 className="text-7xl font-black mb-6">
                O sabor que voce <span className="text-orange border-b-3 border-orange-500 italic">merece</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-md mb-8">
                Carne moída no dia, pão artesanal e ingredientes selecionados da nossa terra, com muito sabor!
              </p>
              <div className="flex gap-3">
              <button className="bg-white text-black px-8 py-4 rounded-md font-black uppercase transition duration-200 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-100 active:scale-90 shadow-lg hover:shadow-orange-500/50">
                Ver Cardápio
                </button>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              {/* Efeito de brilho atrás do burguer */}
              <div className="absolute w-80 h-80 bg-orange-600/20 blur-[100px] rounded-full"></div>
              <img 
                src="/burger-hero.png" 
                alt="Hambúrguer Gourmet" 
                className="relative z-10 w-full max-w-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] animate-bounce-slow"
              />
            </div>
          </div>
        </section>
  
        {/* 3. SEÇÃO DE DESTAQUES (TAMBÉM OCUPANDO TODA A LARGURA COM FUNDO PRETO) */}
        <section id="menu" className="w-full py-24 bg-[#141414]">
          <div className="container mx-auto px-8 text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic mb-2">Os mais pedidos</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
  
          <div className="container mx-auto px-8 grid md:grid-cols-2 gap-8">
            {DESTAQUES.map((item) => (
              <div key={item.id} className="bg-[#1a1a1a] p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center border border-white/5 hover:border-orange-500/50 transition group">
                <div className="w-full md:w-48 aspect-square overflow-hidden rounded-xl">
                   <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{item.nome}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.descricao}</p>
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