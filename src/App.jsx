// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // 1. Importe o AnimatePresence
import { useTheme } from './context/ThemeContext.jsx';

// Componentes
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AnimatedPage from './components/AnimatedPage.jsx'; // 2. Importe nosso componente de animação

// Páginas
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import ServicosPage from './pages/ServicosPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

function App() {
  const { theme } = useTheme();
  const location = useLocation(); // 3. Adicione o hook de localização

  return (
    // A classe do tema agora fica aqui
    <div className={theme}>
      <Header />
      
      {/* 4. O AnimatePresence "abraça" as rotas */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* 5. Cada página agora é "abraçada" pelo AnimatedPage */}
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="/sobre" element={<AnimatedPage><SobrePage /></AnimatedPage>} />
          <Route path="/servicos" element={<AnimatedPage><ServicosPage /></AnimatedPage>} />
          <Route path="/portfolio" element={<AnimatedPage><PortfolioPage /></AnimatedPage>} />
          <Route path="/blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
          <Route path="/contato" element={<AnimatedPage><ContatoPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

// Pequeno ajuste: O App agora precisa estar dentro do BrowserRouter
// para que o hook 'useLocation' funcione. Vamos ajustar o main.jsx
export default App;