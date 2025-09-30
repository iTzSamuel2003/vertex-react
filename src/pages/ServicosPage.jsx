import { Link } from 'react-router-dom';

// 1. Criamos um componente reutilizável para o Card de Serviço
// Ele recebe "props" (propriedades) como icon, title, e description
function ServiceCard({ icon, title, description }) {
  return (
    <div className="specialty-card">
      <div className="icon"><i className={icon}></i></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ServicosPage() {
  return (
    <main>
      <section className="page-header">
        <h1>Soluções Completas em Dados e Desenvolvimento</h1>
        <p>Do pipeline de dados à interface do usuário, oferecemos a expertise técnica para transformar suas ideias em realidade.</p>
      </section>

      <section className="page-section">
        <div className="container">

          <div className="service-category">
            <h2 className="service-category-title">Inteligência de Dados</h2>
            <div className="services-grid">
              {/* 2. Agora usamos nosso componente reutilizável, passando os dados para cada um */}
              <ServiceCard 
                icon="fas fa-database"
                title="Engenharia de Dados"
                description="Projetamos e implementamos arquiteturas de dados robustas e escaláveis, garantindo que suas informações sejam coletadas, armazenadas e processadas com máxima eficiência e confiabilidade."
              />
              <ServiceCard 
                icon="fas fa-chart-pie"
                title="Business Intelligence (BI)"
                description="Criamos dashboards e relatórios interativos que traduzem dados complexos em visualizações claras e intuitivas, permitindo que você monitore KPIs e descubra insights valiosos."
              />
              <ServiceCard 
                icon="fas fa-brain"
                title="Ciência de Dados & IA"
                description="Aplicamos modelos de Machine Learning e inteligência artificial para prever tendências, otimizar processos e criar soluções inovadoras que geram uma vantagem competitiva real."
              />
            </div>
          </div>

          <div className="service-category">
            <h2 className="service-category-title">Desenvolvimento de Software</h2>
            <div className="services-grid">
              <ServiceCard 
                icon="fas fa-laptop-code"
                title="Aplicações Web Customizadas"
                description="Desenvolvemos sistemas web sob medida, do back-end ao front-end, utilizando tecnologias de ponta para entregar aplicações rápidas, seguras e com uma experiência de usuário impecável."
              />
              <ServiceCard 
                icon="fas fa-cloud"
                title="Arquitetura em Nuvem"
                description="Planejamos e gerenciamos sua infraestrutura em provedores como AWS, Azure e GCP, garantindo escalabilidade, segurança e otimização de custos para suas aplicações."
              />
              <ServiceCard 
                icon="fas fa-cogs"
                title="Integração de Sistemas e APIs"
                description="Conectamos suas ferramentas e plataformas, criando APIs robustas e orquestrando fluxos de trabalho para automatizar processos e garantir que seus sistemas conversem entre si."
              />
            </div>
          </div>

        </div>
      </section>

      <section className="container">
        <div className="cta-section">
          <h2>Tem um desafio para nós?</h2>
          {/* O atributo 'style' foi convertido para um objeto JavaScript com camelCase */}
          <p style={{ marginBottom: '1.5rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Vamos conversar sobre como nossas soluções podem ajudar a alcançar seus objetivos.
          </p>
          <Link to="/contato" className="btn">Solicite uma Proposta</Link>
        </div>
      </section>
    </main>
  );
}

export default ServicosPage;