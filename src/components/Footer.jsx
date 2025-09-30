// src/components/Footer.jsx

import styles from './Footer.module.css';

function Footer() {
  return (
    // A tag <footer> usa o estilo do módulo
    <footer className={styles.mainFooter}>
      
      {/* A div interna usa a classe "container" do seu CSS global, por isso fica SEM o 'styles.' */}
      <div className="container"> 
        <p>&copy; 2025 Vertex Data Solutions. Todos os direitos reservados.</p>
      </div>

    </footer>
  );
}

export default Footer;