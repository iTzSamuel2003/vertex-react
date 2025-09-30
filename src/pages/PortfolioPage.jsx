import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';
import styles from './PortfolioPage.module.css';
import { motion } from 'framer-motion'; // 1. Importar o 'motion'

// 2. Mover as variantes para fora dos componentes para que possam ser acessadas por ambos
const containerVariants = {
  hidden: {}, // Podemos deixar o estado 'hidden' do container vazio
  visible: {
    transition: {
      staggerChildren: 0.5 // Atraso de 0.1s entre cada card
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 }, // Começa 20px para baixo e invisível
  visible: { y: 0, opacity: 1 }   // Termina na posição original e visível
};

// 3. Transformar o Card em um componente animado
function PortfolioCard({ project }) {
  return (
    // Trocamos 'div' por 'motion.div' e adicionamos as variantes do card
    <motion.div className="portfolio-card" data-category={project.category} variants={cardVariants}>
      <img src={project.imageSrc} alt={project.alt} />
      <div className="portfolio-content">
        <div className="portfolio-category">{project.subCategory}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <Link to={project.link} className="btn">Ver Case Study</Link>
      </div>
    </motion.div>
  );
}

function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter(project =>
    filter === 'all' || project.category === filter
  );

  return (
    <main>
      <section className={styles.pageHeader}>
        <h1>Cases de Sucesso</h1>
        <p>Explore alguns dos projetos que tivemos o prazer de desenvolver e veja como ajudamos nossos clientes a atingir seus objetivos.</p>
      </section>

      <section className="page-section">
        <div className="container">
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
              onClick={() => setFilter('all')}
            >
              Todos
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'dados' ? styles.active : ''}`}
              onClick={() => setFilter('dados')}
            >
              Dados
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'dev' ? styles.active : ''}`}
              onClick={() => setFilter('dev')}
            >
              Desenvolvimento
            </button>
          </div>

          {/* 4. Orquestrar a animação no container do grid */}
          <motion.div 
            className={styles.portfolioGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map(project => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.testimonialContent}>
            <i className="fas fa-quote-left"></i>
            <p className={styles.testimonialText}>"A parceria com a Vertex foi um divisor de águas..."</p>
            <p className={styles.testimonialAuthor}>J. Oliveira, Diretor de Operações na Empresa Varejista S.A.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PortfolioPage;