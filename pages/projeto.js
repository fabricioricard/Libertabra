import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  return (
    <>
      <Head>
        <title>Libertabra</title>
        <meta name="description" content="Uma comunidade de pessoas que valorizam liberdade, responsabilidade e construção voluntária." />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>

        {/* ── Hero ── */}
        <section className="hero">
          <img src="/images/logo.png" alt="Logo Libertabra" className="hero-logo" />
          <h1>Libertabra</h1>
          <p className="hero-desc">
            Uma comunidade de pessoas que valorizam liberdade,
            responsabilidade e construção voluntária.
          </p>
          <p className="hero-sub">
            A cidade é um projeto. A comunidade é o começo.
          </p>
          <div className="hero-buttons">
            <a href="https://discord.gg/deGN8UM53e" target="_blank" rel="noopener noreferrer" className="cta-button">
              Entrar no Discord
            </a>
            <a href="https://t.me/+4YqLfte5yS9mZTQx" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              Entrar no Telegram
            </a>
          </div>
        </section>

        {/* ── O que é ── */}
        <section className="section sobre-comunidade">
          <div className="container">
            <span className="section-tag">Sobre</span>
            <h2>O que é a Libertabra?</h2>
            <p>
              A Libertabra é uma comunidade libertária que se organiza através de encontros,
              debates, estudo e construção prática de alternativas reais.
            </p>
            <p>
              Não somos apenas uma ideia futura. Somos pessoas reais se conectando agora.
            </p>
          </div>
        </section>

        {/* ── Comunidade ── */}
        <section className="section comunidade">
          <div className="container">
            <span className="section-tag">Comunidade</span>
            <h2>Participe</h2>
            <p>
              Nossa base está no Discord e no Telegram, onde discutimos filosofia,
              economia, tecnologia e organização prática.
            </p>
            <div className="community-buttons">
              <a href="https://discord.gg/deGN8UM53e" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Entrar no Discord
              </a>
              <a href="https://t.me/+4YqLfte5yS9mZTQx" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Entrar no Telegram
              </a>
            </div>
          </div>
        </section>

        {/* ── Reuniões ── */}
        <section className="section reunioes">
          <div className="container">
            <span className="section-tag">Protocolo</span>
            <h2>Reuniões Semanais</h2>
            <p>
              Realizamos reuniões presenciais a cada 15 dias,
              seguindo o Protocolo Libertabra:
            </p>
            <ol className="protocolo-list">
              <li><span className="protocolo-num">01</span> Abertura</li>
              <li><span className="protocolo-num">02</span> Tema Central</li>
              <li><span className="protocolo-num">03</span> Rodada de Posicionamento</li>
              <li><span className="protocolo-num">04</span> Compromisso</li>
              <li><span className="protocolo-num">05</span> Encerramento</li>
            </ol>
            <p className="reunioes-sub">A presença fortalece o grupo e cria responsabilidade mútua.</p>
          </div>
        </section>

        {/* ── Doação ── */}
<section className="section doacao">
  <div className="container">
    <span className="section-tag">Apoie</span>
    <h2>Apoie a construção da nossa cidade</h2>
    <p>
      Sua doação ajuda a tornar a Libertabra realidade. Contribua com{' '}
      <strong>NANO (XNO)</strong>.
    </p>

    <div className="doacao-options">

      {/* NANO */}
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
    </>
  )
}
