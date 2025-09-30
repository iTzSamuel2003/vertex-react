import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'; // Importa os estilos específicos da HomePage

function HomePage() {
  return (
    <main>
      {/* Aplicamos a classe 'hero' do nosso módulo */}
      <section className={styles.hero}>
        {/* Aqui combinamos uma classe do módulo com uma classe global */}
        <div className={`${styles.heroContent} container`}>
          <h1>Transformando Dados em Decisões, Ideias em Realidade</h1>
          <p>Soluções de ponta em Engenharia de Dados e Desenvolvimento de Software para impulsionar a inovação no seu negócio.</p>
          {/* A classe 'btn' é global, então não precisa do 'styles' */}
          <Link to="/servicos" className="btn">Conheça Nossas Soluções</Link>
        </div>
      </section>

      {/* A classe 'page-section' é global, então não precisa do 'styles' */}
      <section className="page-section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Nossos Principais Serviços</h2>
          <p className={styles.sectionSubtitle}>Oferecemos um portfólio completo para cobrir todas as suas necessidades de tecnologia, desde a estruturação de dados até a criação de aplicações de alta performance.</p>
          {/* As classes abaixo são genéricas e usadas em outras páginas, então as mantemos globais */}
          <div className="services-grid">
            <div className="specialty-card">
              <div className="icon"><i className="fas fa-database"></i></div>
              <h3>Engenharia de Dados</h3>
              <p>Criamos pipelines de dados robustos e escaláveis para garantir que suas informações sejam confiáveis e acessíveis.</p>
            </div>
            <div className="specialty-card">
              <div className="icon"><i className="fas fa-chart-pie"></i></div>
              <h3>Análise de Dados e BI</h3>
              <p>Desenvolvemos dashboards e relatórios inteligentes que transformam seus dados em insights estratégicos.</p>
            </div>
            <div className="specialty-card">
              <div className="icon"><i className="fas fa-laptop-code"></i></div>
              <h3>Desenvolvimento Web</h3>
              <p>Construímos aplicações web customizadas, rápidas e seguras, focadas na melhor experiência do usuário.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--card-background)' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nossos Diferenciais</h2>
          <div className="differentiators-grid">
            <div className="differentiator-item">
              <div className="icon"><i className="fas fa-handshake"></i></div>
              <h3>Parceria Estratégica</h3>
              <p>Não somos apenas fornecedores. Atuamos como parceiros, mergulhando no seu negócio para entregar o máximo de valor.</p>
            </div>
            <div className="differentiator-item">
              <div className="icon"><i className="fas fa-lightbulb"></i></div>
              <h3>Foco em Inovação</h3>
              <p>Estamos sempre pesquisando e aplicando as tecnologias mais recentes para garantir soluções modernas e eficientes.</p>
            </div>
            <div className="differentiator-item">
              <div className="icon"><i className="fas fa-bullseye"></i></div>
              <h3>Resultados Comprovados</h3>
              <p>Nosso sucesso é medido pelo sucesso dos nossos clientes. Focamos em entregar soluções que geram impacto real.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
          <div className="portfolio-grid">
            <div className="portfolio-card">
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagem do Projeto 1" />
              <div className="portfolio-content">
                <h3>Dashboard de Vendas</h3>
                <p>Plataforma de BI para monitoramento de KPIs de vendas em tempo real para uma grande varejista.</p>
                <div className="tags"><span className="tag">Power BI</span><span className="tag">SQL</span></div>
              </div>
            </div>
            <div className="portfolio-card">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagem do Projeto 2" />
              <div className="portfolio-content">
                <h3>Sistema de Gestão Online</h3>
                <p>Aplicação web para uma startup, permitindo a gestão de clientes, projetos e faturamento.</p>
                <div className="tags"><span className="tag">React</span><span className="tag">Node.js</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="cta-section">
          <h2>Pronto para Transformar seu Negócio?</h2>
          <Link to="/contato" className="btn">Fale com um Especialista</Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;