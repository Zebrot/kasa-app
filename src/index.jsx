import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, ScrollRestoration, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import FicheLogement from './pages/Fiche-logement/index.jsx'
import About from './pages/About/index.jsx'
import Unknown from  './pages/Unknown/index.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import './styles/css/global.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <main className = "main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logement" element={<FicheLogement/>} />
          <Route path="/about" element={<About />} />
          <Route path='/404' element={<Unknown />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
