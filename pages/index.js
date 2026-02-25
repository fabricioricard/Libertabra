import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Libertabra</title>
        <meta name="description" content="Uma comunidade de pessoas que valorizam liberdade, responsabilidade e construção voluntária." />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>

        {/* Hero */}
        <section className="hero">
          <h1>Libertabra</h1>
          <img src="/images/logo.png" alt="Logo Libertabra" className="hero-logo" />
          <p>
            Uma comunidade de pessoas que valorizam liberdade, responsabilidade
            e construção voluntária.
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

        {/* O que é a Libertabra */}
        <section className="sobre-comunidade">
          <div className="container">
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

        {/* Comunidade ativa */}
        <section className="comunidade">
          <div className="container">
            <h2>Participe da Comunidade</h2>
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

        {/* Reuniões semanais */}
        <section className="reunioes">
          <div className="container">
            <h2>Reuniões Semanais</h2>
            <p>
              Realizamos reuniões presenciais a cada 15 dias,
              seguindo o Protocolo Libertabra:
            </p>
            <ul>
              <li>Abertura</li>
              <li>Tema Central</li>
              <li>Rodada de Posicionamento</li>
              <li>Compromisso</li>
              <li>Encerramento</li>
            </ul>
            <p>A presença fortalece o grupo e cria responsabilidade mútua.</p>
          </div>
        </section>

        {/* Doações */}
        <section className="doacoes">
          <div className="container">
            <h2>Apoie o crescimento da comunidade</h2>
            <p>
              Sua contribuição ajuda a fortalecer nossos encontros,
              estrutura digital e expansão da Libertabra.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
