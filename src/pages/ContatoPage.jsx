function ContatoPage() {
  return (
    <main>
      <section className="page-header">
        <h1>Vamos Construir Algo Incrível Juntos</h1>
        <p>Estamos prontos para ouvir sobre seus desafios e transformar suas ideias em soluções tecnológicas de alto impacto.</p>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h3>Informações de Contato</h3>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <strong>E-mail</strong><br />
                  <a href="mailto:contato@vertexsolutions.com">contato@vertexsolutions.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-phone"></i></div>
                <div>
                  <strong>Telefone</strong><br />
                  <a href="tel:+5567999999999">+55 (67) 99999-9999</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <strong>Endereço</strong><br />
                  Av. Afonso Pena, 4000<br />
                  Campo Grande, MS - Brasil
                </div>
              </div>

              <div className="social-links-contact">
                <a href="#" target="_blank" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" target="_blank" title="GitHub"><i className="fab fa-github"></i></a>
                <a href="#" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>Envie-nos uma Mensagem</h3>
              <form action="#" method="POST" className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Seu Nome</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Seu E-mail</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Qual serviço te interessa?</label>
                  <select id="service" name="service">
                    <option value="consulta_geral">Consulta Geral</option>
                    <option value="engenharia_dados">Engenharia de Dados</option>
                    <option value="bi">Business Intelligence</option>
                    <option value="dev_web">Desenvolvimento Web</option>
                    <option value="cloud">Soluções em Nuvem</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Sua Mensagem</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn">Enviar Mensagem</button>
              </form>
            </div>
          </div>

          <div className="map-section">
            <h2 className="section-title">Nossa Localização</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.44196557877!2d-54.61282208882049!3d-20.446868652033037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8a473e358b1%3A0x2077b830a6c6b351!2sAv.%20Afonso%20Pena%2C%204000%20-%20Jardim%20dos%20Estados%2C%20Campo%20Grande%20-%20MS%2C%2079020-001!5e0!3m2!1spt-BR!2sbr!4v1695995579294!5m2!1spt-BR!2sbr" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContatoPage;