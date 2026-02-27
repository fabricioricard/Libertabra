import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button className="btn btn-primary" onClick={handleCopy}>
      {copied ? '✓ Copiado!' : 'Copiar Endereço'}
    </button>
  )
}

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Libertabra</title>
        <meta name="description" content="Uma comunidade de pessoas que valorizam liberdade, responsabilidade e construção voluntária." />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>

        <section className="hero">
          <div className={`hero-inner ${visible ? 'hero-visible' : ''}`}>
            <img src="/images/logo.png" alt="Logo Libertabra" className="hero-logo" />
            <h1>Libertabra</h1>
            <p className="hero-desc">
              Uma comunidade de pessoas que valorizam liberdade,
              responsabilidade e construção voluntária.
            </p>
            <p className="hero-sub">
              A cidade é o propósito final. A comunidade é o começo.
            </p>
            <a
              href="https://t.me/+4YqLfte5yS9mZTQx"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.67l-2.95-.924c-.64-.203-.652-.64.136-.954l11.57-4.461c.537-.194 1.006.131.968.89z"/>
              </svg>
              Entrar no Telegram
            </a>
          </div>
          <div className="hero-glow" />
        </section>

        <section className="section sobre-comunidade fade-section">
          <div className="container">
            <span className="section-tag">Sobre</span>
            <h2>O que é Libertabra?</h2>
            <div className="sobre-grid">
              <div className="sobre-card">
                <div className="sobre-icon">🔓</div>
                <h3>Liberdade Real</h3>
                <p>Uma comunidade que se organiza através de encontros, debates e estudo.</p>
              </div>
              <div className="sobre-card">
                <div className="sobre-icon">🌱</div>
                <h3>Construção Prática</h3>
                <p>Não somos apenas uma ideia futura. Somos pessoas reais se conectando agora.</p>
              </div>
              <div className="sobre-card">
                <div className="sobre-icon">🤝</div>
                <h3>Voluntária</h3>
                <p>Participação 100% voluntária, sem imposições.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reunioes fade-section">
          <div className="container">
            <span className="section-tag">Protocolo</span>
            <h2>Reuniões Semanais</h2>
            <p className="section-desc">
              Realizamos reuniões online/presenciais a cada 7 dias,
              seguindo o Protocolo Libertabra:
            </p>
            <div className="protocolo-steps">
              {['Abertura', 'Tema Central', 'Rodada de Posicionamento', 'Compromisso', 'Encerramento'].map((step, i) => (
                <div className="protocolo-step" key={step}>
                  <span className="step-num">0{i + 1}</span>
                  <span className="step-label">{step}</span>
                </div>
              ))}
            </div>
            <p className="reunioes-sub">A presença fortalece o grupo e cria responsabilidade mútua.</p>
          </div>
        </section>

        <section className="section doacao fade-section">
          <div className="container">
            <span className="section-tag">Apoie</span>
            <h2>Apoie a construção da nossa cidade</h2>
            <p className="section-desc">
              Sua doação ajuda a tornar Libertabra realidade. Contribua com <strong>NANO (XNO)</strong>.
            </p>
            <div className="doacao-options">
              <div className="doacao-card">
                <h3>NANO (XNO)</h3>
                <p className="wallet-address">nano_1xueqq48zoua1b74ksczpkb37xt6aitrs5teqfcdejb7hyttep86f47due7p</p>
                <CopyButton text="nano_1xueqq48zoua1b74ksczpkb37xt6aitrs5teqfcdejb7hyttep86f47due7p" />
                <div className="qr-code">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=nano_3t8z5f1cd8e4wftu4xdr38krs8o9bxpi1e6e1wdkk37e9rfjb89qqfc9xw6o"
                    alt="QR Code NANO"
                    className="qr-image"
                  />
                </div>
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
        }
        .hero-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-glow {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(255, 193, 7, 0.15), transparent 70%);
          pointer-events: none;
        }
        .telegram-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 2rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #FFC107, #e0a800);
          color: #000;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          text-decoration: none;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(255, 193, 7, 0.45);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          letter-spacing: 0.01em;
        }
        .telegram-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 30px rgba(255, 193, 7, 0.6);
        }
        .telegram-btn svg {
          flex-shrink: 0;
        }
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
          max-width: 600px;
          margin-bottom: 2rem;
        }
        .sobre-comunidade {
          background: #fff;
        }
        .sobre-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .sobre-card {
          background: #f9f9f9;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 2rem 1.5rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .sobre-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-color: #FFC107;
        }
        .sobre-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        .sobre-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1A3C34;
          margin-bottom: 0.5rem;
        }
        .sobre-card p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
        }
        .reunioes {
  background: #1A3C34;
  color: #fff;
  text-align: center;
}
        .reunioes .section-tag {
          background: rgba(255,193,7,0.2);
        }
        .reunioes h2 {
          color: #FFC107;
        }
        .reunioes .section-desc {
  color: rgba(255,255,255,0.75);
  margin-inline: auto;
}
        .protocolo-steps {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem auto;
  max-width: 480px;
}
        .protocolo-step {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 0.85rem 1.25rem;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .protocolo-step:hover {
          background: rgba(255,193,7,0.1);
          border-color: rgba(255,193,7,0.4);
        }
        .step-num {
          font-size: 0.8rem;
          font-weight: 800;
          color: #FFC107;
          letter-spacing: 0.05em;
          min-width: 28px;
        }
        .step-label {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .reunioes-sub {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.6);
  font-style: italic;
  margin-top: 0.5rem;
  text-align: center;
}
        .doacao {
          background: #f4f4f4;
          text-align: center;
        }
        .doacao .section-desc {
          margin-inline: auto;
        }
        .fade-section {
          animation: fadeUp 0.7s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          .section h2 { font-size: 1.6rem; }
          .telegram-btn { padding: 0.85rem 1.8rem; font-size: 0.95rem; }
        }
      `}</style>
    </>
  )
}
