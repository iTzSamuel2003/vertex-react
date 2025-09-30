// src/components/Header.jsx

import { NavLink } from 'react-router-dom'; // Apenas NavLink é importado
import styles from './Header.module.css';
import ThemeSwitcher from './ThemeSwitcher.jsx';

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        {/* CORRIGIDO AQUI: Trocamos Link por NavLink */}
        <NavLink to="/" className={styles.logo}>Vertex Data Solutions</NavLink>
        
        <nav className={styles.mainNav}>
          <ul>
            <li><NavLink to="/" className={navLinkStyles}>Início</NavLink></li>
            <li><NavLink to="/sobre" className={navLinkStyles}>Sobre</NavLink></li>
            <li><NavLink to="/servicos" className={navLinkStyles}>Serviços</NavLink></li>
            <li><NavLink to="/portfolio" className={navLinkStyles}>Portfólio</NavLink></li>
            <li><NavLink to="/blog" className={navLinkStyles}>Blog</NavLink></li>
            <li><NavLink to="/contato" className={navLinkStyles}>Contato</NavLink></li>
          </ul>
        </nav>

        <div className={styles.headerActions}> {/* Criei um wrapper para alinhar melhor */}
          <ThemeSwitcher />
          <div className={styles.menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;