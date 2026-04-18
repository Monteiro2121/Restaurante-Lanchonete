import { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// Estilo do mapa para combinar com o tema dark do site
const mapOptions = {
  styles: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
  ],
  disableDefaultUI: true, // Deixa o mapa mais limpo no mobile
  zoomControl: true,
};

const center = {
  lat: -10.9741862,
  lng: -37.0675029,
};

export default function Endereco() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB9YKhw1urVeMV_G2A6oXI70J4NTjlGw54" 
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      
      {/* HEADER - Ajustado padding para mobile */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-600/10 to-transparent text-center px-6">
        <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
          <span className="text-orange-500">Nosso </span>Endereço
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
          Rua Aloísio Campos, 248 • Atalaia. <br className="hidden md:block" />
        </p>
      </section>

      {/* MAPA CONTAINER */}
      <div className="max-w-6xl mx-auto mb-12 px-4 md:px-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
          {isLoaded ? (
            <GoogleMap
              // Altura menor no mobile (350px) e maior no desktop (550px)
              mapContainerClassName="w-full h-[350px] md:h-[550px]"
              center={center}
              zoom={17}
              options={mapOptions}
            >
              {/* Marcador Customizado pode entrar aqui */}
            </GoogleMap>
          ) : (
            <div className="h-[350px] md:h-[550px] w-full bg-[#111] flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">Carregando mapa...</p>
              </div>
            </div>
          )}
          
          {/* Overlay de borda sutil */}
          <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
        </div>
      </div>

      {/* BOTÃO VOLTAR - Ajustado largura no mobile */}
      <div className="w-full flex justify-center pb-20 px-6">
        <Link 
          to="/" 
          className="w-full md:w-auto text-center bg-white text-black px-12 py-4 rounded-md font-black uppercase transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/10"
        >
          VOLTAR PARA INÍCIO
        </Link>
      </div>
    </div>
  );
}