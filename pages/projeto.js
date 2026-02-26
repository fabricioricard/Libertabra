import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Projeto() {
  return (
    <>
      <Head>
        <title>Projeto - Libertabra</title>
        <meta name="description" content="O projeto da Cidade Libertabra: uma visão de liberdade e sustentabilidade." />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <section className="hero">
          <h1>O Projeto Libertabra</h1>
          <p className="hero-subtitle">
            Uma revolução na forma de viver: uma cidade privada, autossustentável e livre.
          </p>
          <img src="/images/city.png" alt="Visão da cidade de Libertabra" className="hero-image" />

          <div className="hero-content">
            <h2>A Visão da Cidade Privada</h2>
            <p>
              Libertabra é mais do que uma cidade: é um sonho libertário que se torna realidade.
              Nossa missão é criar uma comunidade autossustentável onde a liberdade individual,
              o livre mercado e a sustentabilidade guiam cada decisão. Comprando o terreno,
              transformaremos um espaço em uma cidade autônoma, livre de interferências estatais,
              onde os moradores controlam sua infraestrutura, governança e economia.
            </p>

            <h3>Compra do Terreno</h3>
            <p>O primeiro passo é adquirir um terreno. Após a compra, o desenvolvimento incluirá:</p>
            <ul>
              <li>
                <strong>Planejamento Urbano Inovador:</strong> Infraestrutura com energia renovável
                (solar), agricultura orgânica e sistemas de água reciclada, projetados para
                harmonia com o meio ambiente.
              </li>
              <li>
                <strong>Governança Baseada em Liberdade:</strong> Contratos privados e arbitragem
                voluntária substituem imposições governamentais, promovendo autonomia.
              </li>
              <li>
                <strong>Economia Descentralizada:</strong> Adoção da criptomoeda BIG (na rede
                Solana) para transações, assegurando liberdade financeira e transparência.
              </li>
            </ul>

            <h3>Legalidade e Sustentabilidade</h3>
            <p>
              Todos os passos do projeto seguem as legislações vigentes de propriedade no Brasil,
              assegurando a legalidade da aquisição do terreno e dos direitos dos participantes.
              A propriedade será organizada por meio de uma empresa, onde os doadores se tornam
              sócios com participação proporcional. Isso garante segurança jurídica e transparência
              no processo.
            </p>
            <p>
              A construção da cidade será orientada por princípios de autossuficiência e
              colaboração, priorizando autonomia energética (com fontes renováveis), produção
              local de alimentos e uso responsável dos recursos naturais. Sustentabilidade não
              será apenas um pilar — será o alicerce de um novo modo de viver livre.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
