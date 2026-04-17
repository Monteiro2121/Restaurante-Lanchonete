import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Index from './PaginaInicial.tsx'  
import Cardapio from './Cardapio.tsx'
import Endereço from './Endereço.tsx'    
import Navbar from './Navbar.tsx' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/endereço" element={<Endereço />} />
      </Routes>
    </Router>
  </StrictMode>
)
