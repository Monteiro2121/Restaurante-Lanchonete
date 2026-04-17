import { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "580px",
};

const center = {
  lat: -10.9741862,
  lng: -37.0675029,
};

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Burgers");

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB9YKhw1urVeMV_G2A6oXI70J4NTjlGw54" 
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      
      {/* HEADER */}
      <section className="py-20 bg-gradient-to-b from-orange-600/20 to-transparent text-center">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-2">
          <span className="text-orange-500">Nosso </span>Endereço
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto px-1">
          Localizados no coração da gastronomia aracajuana.
        </p>
      </section>

      {/* MAPA COM VERIFICAÇÃO DE CARREGAMENTO */}
      <div className="max-w-6xl mx-auto py-0-12 px-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}
            >
              {/* Você pode adicionar Marcadores aqui depois */}
            </GoogleMap>
          ) : (
            <div className="h-[400px] w-full bg-[#111] flex items-center justify-center">
              <p className="text-orange-500 font-bold animate-pulse">Carregando mapa...</p>
            </div>
          )}
        </div>
      </div>

      {/* BOTÃO VOLTAR */}
      <div className="w-full flex justify-center pb-10">
        <Link 
          to="/" 
          className="bg-white text-black px-10 py-4 rounded-md font-black uppercase transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 shadow-lg"
        >
          VOLTAR PARA INÍCIO
        </Link>
      </div>
    </div>
  );
}