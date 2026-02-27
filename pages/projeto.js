import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Projeto() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Cidade Privada - Libertabra</title>
        <meta name="description" content="O projeto da Cidade Libertabra: uma visão de liberdade e sustentabilidade." />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>

        {/* ── Hero ── */}
        <section className="hero">
          <div className={`hero-inner ${visible ? 'hero-visible' : ''}`}>
            <span className="section-tag">Projeto</span>
            <h1>O Projeto Libertabra</h1>
            <p className="hero-desc">
              Uma revolução na forma de viver: uma cidade privada, autossustentável e livre.
            </p>
            <img src="/images/city.png" alt="Visão da cidade de Libertabra" className="hero-image" />
          </div>
          <div className="hero-glow" />
        </section>

        {/* ── Visão ── */}
        <section className="section visao fade-section">
          <div className="container">
            <span className="section-tag">Visão</span>
            <h2>A Visão da Cidade Privada</h2>
            <p className="section-desc">
              Libertabra é mais do que uma cidade: é um sonho libertário que se torna realidade.
              Nossa missão é criar uma comunidade autossustentável onde a liberdade individual,
              o livre mercado e a sustentabilidade guiam cada decisão. Comprando o terreno,
              transformaremos um espaço em uma cidade autônoma, livre de interferências estatais,
              onde os moradores controlam sua infraestrutura, governança e economia.
            </p>
          </div>
        </section>

        {/* ── Pilares ── */}
        <section className="section pilares fade-section">
          <div className="container">
            <span className="section-tag">Desenvolvimento</span>
            <h2>Compra do Terreno</h2>
            <p className="section-desc">
              O primeiro passo é adquirir um terreno. Após a compra, o desenvolvimento incluirá:
            </p>
            <div className="pilares-grid">
              <div className="pilar-card">
                <div className="pilar-icon">☀️</div>
                <h3>Planejamento Urbano Inovador</h3>
                <p>Infraestrutura com energia renovável (solar), agricultura orgânica e sistemas de água reciclada, projetados para harmonia com o meio ambiente.</p>
              </div>
              <div className="pilar-card">
                <div className="pilar-icon">🔓</div>
                <h3>Governança Baseada em Liberdade</h3>
                <p>Contratos privados e arbitragem voluntária substituem imposições governamentais, promovendo autonomia.</p>
              </div>
              <div className="pilar-card">
                <div className="pilar-icon">₿</div>
                <h3>Economia Descentralizada</h3>
                <p>Adoção da criptomoeda BIG (na rede Solana) para transações, assegurando liberdade financeira e transparência.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Legalidade ── */}
        <section className="section legalidade fade-section">
          <div className="container">
            <span className="section-tag">Legalidade</span>
            <h2>Legalidade e Sustentabilidade</h2>
            <div className="legalidade-grid">
              <div className="legalidade-bloco">
                <h3>⚖️ Segurança Jurídica</h3>
                <p>
                  Todos os passos do projeto seguem as legislações vigentes de propriedade no Brasil,
                  assegurando a legalidade da aquisição do terreno e dos direitos dos participantes.
                  A propriedade será organizada por meio de uma empresa, onde os doadores se tornam
                  sócios com participação proporcional.
                </p>
              </div>
              <div className="legalidade-bloco">
                <h3>🌿 Sustentabilidade</h3>
                <p>
                  A construção da cidade será orientada por princípios de autossuficiência e
                  colaboração, priorizando autonomia energética (com fontes renováveis), produção
                  local de alimentos e uso responsável dos recursos naturais. Sustentabilidade não
                  será apenas um pilar — será o alicerce de um novo modo de viver livre.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BackToTop />

      <style jsx>{`
        .hero {
          position: relative;
          overflow: hidden;
        }
        .hero-inner {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          text-align: center;
        }
        .hero-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-inner .section-tag {
          display: inline-block;
          background: rgba(255, 193, 7, 0.2);
          color: #e0a800;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }
        .hero-inner h1 {
          color: #FFC107;
        }
        .hero-desc {
          font-size: 1.15rem;
          max-width: 650px;
          margin: 0 auto 2rem;
          opacity: 0.9;
        }
        .hero-image {
          max-width: 480px;
          width: 90%;
          margin: 0 auto;
          display: block;
          border-radius: 14px;
          border: 3px solid #FFC107;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }
        .hero-image:hover {
          transform: scale(1.02);
        }
        .hero-glow {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(255, 193, 7, 0.12), transparent 70%);
          pointer-events: none;
        }

        /* Sections */
        .section {
          padding: 4rem 0;
        }
        .section-tag {
          display: inline-block;
          background: rgba(255, 193, 7, 0.15);
          color: #e0a800;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 50px;
          margin-bottom: 0.75rem;
        }
        .section h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #1A3C34;
          margin-bottom: 0.75rem;
        }
        .section-desc {
          font-size: 1.05rem;
          color: #555;
          max-width: 700px;
          margin-bottom: 2rem;
          line-height: 1.75;
        }

        /* Visão */
        .visao {
  background: #fff;
  text-align: center;
}

.visao .section-desc {
  margin-inline: auto;
}

        /* Pilares */
        .pilares {
  background: #f4f4f4;
  text-align: center;
}

.pilares .section-desc {
  margin-inline: auto;
}
        .pilares-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .pilar-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 2rem 1.5rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .pilar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-color: #FFC107;
        }
        .pilar-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        .pilar-card h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1A3C34;
          margin-bottom: 0.5rem;
        }
        .pilar-card p {
          font-size: 0.93rem;
          color: #666;
          line-height: 1.65;
        }

        /* Legalidade */
        .legalidade {
  background: #1A3C34;
  color: #fff;
  text-align: center;
}
        .legalidade .section-tag {
          background: rgba(255,193,7,0.2);
        }
        .legalidade h2 {
          color: #FFC107;
        }
        .legalidade-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .legalidade-bloco {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 2rem 1.5rem;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .legalidade-bloco:hover {
          background: rgba(255,193,7,0.08);
          border-color: rgba(255,193,7,0.35);
        }
        .legalidade-bloco h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #FFC107;
          margin-bottom: 0.75rem;
        }
        .legalidade-bloco p {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
        }

        /* Fade */
        .fade-section {
          animation: fadeUp 0.7s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .section h2 { font-size: 1.6rem; }
          .hero-image { max-width: 100%; }
        }
      `}</style>
    </>
  )
}
