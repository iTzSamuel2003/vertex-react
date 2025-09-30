import { Link } from 'react-router-dom';

// Componente reutilizável para os cards de "Nossos Valores"
function ValueCard({ icon, title, description }) {
  return (
    <div className="specialty-card">
      <div className="icon"><i className={icon}></i></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Componente reutilizável para os cards de "Nossa Equipe"
function TeamMemberCard({ imgSrc, altText, name, role, socialLinks }) {
  return (
    <div className="team-member">
      <img src={imgSrc} alt={altText} />
      <h4>{name}</h4>
      <span>{role}</span>
      <div className="social-links">
        {socialLinks.map(link => (
          <a key={link.icon} href={link.url} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${link.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}


function SobrePage() {
  const teamMembers = [
    // --- CARD ATUALIZADO COM SUAS INFORMAÇÕES ---
    {
      // Adicione uma barra no início do caminho
      imgSrc: "public/fotos/eu.jpg",
      altText: "Foto de Samuel Borges", // Corrigido: Texto alt correspondente à imagem
      name: "Samuel de Albuquerque Borges", // Atualizado: Seu nome
      role: "Desenvolvedor de Software", // Atualizado: Um cargo de exemplo
      socialLinks: [
        { icon: 'linkedin-in', url: 'https://linkedin.com/in/samuel-de-albuquerque-borges-46b0b32aa/' }, 
        { icon: 'github', url: 'https://github.com/iTzSamuel2003' }
      ] // Atualizado: Seus links
    },
    // --- FIM DO CARD ATUALIZADO ---
    {
      imgSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      altText: "Foto de A. Costa",
      name: "A. Costa",
      role: "Líder de Engenharia de Software",
      socialLinks: [{ icon: 'linkedin-in', url: '#' }, { icon: 'github', url: '#' }]
    },
    {
      imgSrc: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      altText: "Foto de R. Pereira",
      name: "R. Pereira",
      role: "Especialista em Business Intelligence",
      socialLinks: [{ icon: 'linkedin-in', url: '#' }]
    }
  ];

  return (
    <main>
      <section className="page-header">
        <h1>Apaixonados por Resolver Desafios com Tecnologia</h1>
        <p>Conheça a história, os valores e a equipe que fazem da Vertex Data Solutions sua parceira ideal em inovação.</p>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="story-section">
            <div className="story-image">
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Equipe colaborando em um projeto" />
            </div>
            <div className="story-content">
              <h3>Nossa Jornada</h3>
              <p>A Vertex Data Solutions nasceu da convicção de que muitas empresas, apesar de ricas em dados, ainda não exploram todo o seu potencial. Vimos a oportunidade de unir duas áreas cruciais: a engenharia de dados, que organiza e dá sentido à informação, e o desenvolvimento de software, que cria as ferramentas para agir sobre ela.</p>
              <p>Começamos como uma pequena equipe de especialistas e hoje ajudamos empresas de diversos portes a se tornarem mais eficientes e inteligentes através de soluções tecnológicas sob medida.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--card-background)' }}>
        <div className="container">
          <h2 className="section-title">Nossos Valores</h2>
          <div className="values-grid">
            <ValueCard 
              icon="fas fa-lightbulb"
              title="Inovação Constante"
              description="Buscamos e aplicamos as melhores e mais novas tecnologias para resolver os problemas de hoje e preparar nossos clientes para o amanhã."
            />
            <ValueCard 
              icon="fas fa-handshake"
              title="Parceria Verdadeira"
              description="Seu sucesso é o nosso sucesso. Trabalhamos lado a lado com sua equipe para entender seus desafios e entregar o máximo de valor."
            />
            <ValueCard 
              icon="fas fa-bullseye"
              title="Excelência Técnica"
              description="Somos obcecados por qualidade, desde a primeira linha de código até a entrega final, garantindo soluções robustas e confiáveis."
            />
          </div>
        </div>
      </section>
      
      <section className="page-section">
        <div className="container">
          <h2 className="section-title">Nossa Equipe</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <TeamMemberCard 
                key={member.name}
                imgSrc={member.imgSrc}
                altText={member.altText}
                name={member.name}
                role={member.role}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="cta-section">
          <h2>Gostou da nossa história?</h2>
          <p style={{ marginBottom: '1.5rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>Vamos construir o próximo capítulo da sua empresa juntos.</p>
          <Link to="/contato" className="btn">Entre em Contato</Link>
        </div>
      </section>
    </main>
  );
}

export default SobrePage;
// Corrigido: Removida uma chave "}" extra que estava aqui