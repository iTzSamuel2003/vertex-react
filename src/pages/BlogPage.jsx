import { Link } from 'react-router-dom';

function BlogPage() {
  return (
    <main>
      <section className="page-header">
        <h1>Nosso Blog</h1>
        <p>Artigos, insights e novidades do mundo da tecnologia, dados e desenvolvimento.</p>
      </section>

      <section className="page-section">
        <div className="container">

          <div className="featured-post">
            {/* O atributo 'style' foi convertido para um objeto JavaScript */}
            <div className="featured-post-image" style={{ backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}></div>
            <div className="featured-post-content">
              <span className="blog-meta">ARTIGO EM DESTAQUE</span>
              <h2>Inteligência Artificial Generativa: O que esperar para o futuro dos negócios?</h2>
              <p>Analisamos o impacto das IAs generativas, como o GPT-4, e como as empresas podem se preparar para a próxima onda de inovação tecnológica.</p>
              {/* Usamos Link para navegação interna */}
              <Link to="#" className="read-more">Leia o Artigo Completo &rarr;</Link>
            </div>
          </div>

          <div className="blog-layout">

            <div className="blog-main-content">
              <div className="blog-grid">
                <div className="blog-post-card">
                  {/* Tags <img> precisam ser auto-fechadas com "/>" */}
                  <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagem do post" />
                  <div className="blog-content">
                    <span className="blog-meta">29 de Setembro, 2025 | por Equipe Vertex</span>
                    <h3>5 Tendências em Big Data para Ficar de Olho</h3>
                    <p>O mundo dos dados não para de evoluir. Descubra as principais tendências que vão moldar o mercado nos próximos anos...</p>
                    <Link to="#" className="read-more">Leia Mais &rarr;</Link>
                  </div>
                </div>
                <div className="blog-post-card">
                  <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagem do post" />
                  <div className="blog-content">
                    <span className="blog-meta">15 de Setembro, 2025 | por Equipe Vertex</span>
                    <h3>React vs. Vue: Qual escolher para seu próximo projeto?</h3>
                    <p>Analisamos os prós e contras de dois dos frameworks JavaScript mais populares da atualidade para te ajudar a decidir...</p>
                    <Link to="#" className="read-more">Leia Mais &rarr;</Link>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <Link to="#" className="btn">Carregar Mais Posts</Link>
              </div>
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Pesquisar</h3>
                <form className="search-bar">
                  {/* A tag <input> também precisa ser auto-fechada com "/>" */}
                  <input type="text" placeholder="Buscar no blog..." />
                  <button type="submit"><i className="fas fa-search"></i></button>
                </form>
              </div>
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Categorias</h3>
                <ul className="category-list">
                  <li><Link to="#">Engenharia de Dados</Link></li>
                  <li><Link to="#">Desenvolvimento Web</Link></li>
                  <li><Link to="#">Inteligência Artificial</Link></li>
                  <li><Link to="#">Business Intelligence</Link></li>
                  <li><Link to="#">Cloud Computing</Link></li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Posts Recentes</h3>
                <ul className="recent-posts-list">
                  <li><Link to="#">Inteligência Artificial Generativa...</Link></li>
                  <li><Link to="#">5 Tendências em Big Data...</Link></li>
                  <li><Link to="#">React vs. Vue...</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;