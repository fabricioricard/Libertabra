import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Protocolo() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const niveis = [
    {
      nivel: 'Aspirante',
      icon: '🌱',
      desc: 'Interessados em entrar no grupo',
      funcao: 'Participar de reuniões abertas, estudar o Código Libertabra e demonstrar postura e disciplina.',
      criterio: 'Tempo mínimo: 60 dias. Aprovação por votação de 2 Guardiões.',
    },
    {
      nivel: 'Construtor',
      icon: '🔨',
      desc: 'Membros aprovados',
      funcao: 'Participar ativamente, cumprir compromissos e contribuir com ideias e expansão.',
      criterio: 'Tempo mínimo: 6 meses. Aprovação por votação unânime dos Guardiões.',
    },
    {
      nivel: 'Guardião',
      icon: '🛡️',
      desc: 'Membros experientes selecionados pelo Núcleo',
      funcao: 'Preservar princípios, avaliar novos membros, mediar conflitos e proteger a cultura.',
      criterio: 'Votação unânime do Núcleo. Função vitalícia até comportamento antiético.',
    },
    {
      nivel: 'Núcleo',
      icon: '⚡',
      desc: 'Fundador + 2–3 membros estratégicos',
      funcao: 'Direcionamento estratégico, mudança no Código e decisões estruturais.',
      criterio: 'Apenas por escolha do fundador ou consenso do Núcleo atual.',
    },
  ]

  const etapas = [
    {
      num: '01',
      titulo: 'Abertura',
      tempo: '10 min',
      desc: 'Todos organizados, 1–2 minutos de silêncio para foco e leitura de um princípio do Código Fundacional.',
      destaque: '"A soberania começa no indivíduo. A ordem precede a liberdade. A responsabilidade é minha."',
    },
    {
      num: '02',
      titulo: 'Tema Central',
      tempo: '30 min',
      desc: 'Cada reunião tem um tema definido pelo Núcleo ou Guardiões. 10–15 min de exposição seguida de debate ordenado.',
      destaque: 'Temas: soberania financeira, cidades privadas, disciplina pessoal, ética e legado.',
    },
    {
      num: '03',
      titulo: 'Rodada de Posicionamento',
      tempo: '20 min',
      desc: 'Cada membro responde: "O que você construiu desde a última reunião?" Fala limitada a 2–3 minutos por pessoa, sem interrupções.',
      destaque: 'Foco em ação concreta, não teoria.',
    },
    {
      num: '04',
      titulo: 'Compromisso',
      tempo: '10 min',
      desc: 'Cada membro declara uma ação concreta a ser cumprida até a próxima reunião.',
      destaque: 'Cultura de execução e responsabilidade pessoal.',
    },
    {
      num: '05',
      titulo: 'Encerramento',
      tempo: '5–10 min',
      desc: 'Leitura final de um princípio do Código e momento de silêncio para internalizar o aprendizado.',
      destaque: '"A soberania começa em mim. A ordem começa em mim. A responsabilidade é minha."',
    },
  ]

  const principios = [
    'A soberania começa no indivíduo',
    'A responsabilidade precede o direito',
    'A ordem precede a liberdade',
    'A disciplina precede o poder',
    'A construção precede a crítica',
  ]

  return (
    <>
      <Head>
        <title>Protocolo - Libertabra</title>
        <meta name="description" content="O Código Fundacional e Protocolo de Reuniões da Libertabra." />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>

        {/* ── Hero ── */}
        <section className="hero">
          <div className={`hero-inner ${visible ? 'hero-visible' : ''}`}>
            <span className="hero-tag">Código Fundacional</span>
            <h1>Protocolo Libertabra</h1>
            <p className="hero-desc">
              Princípios inegociáveis, estrutura hierárquica e o rito das reuniões
              que sustentam a cultura da comunidade.
            </p>
            <div className="principios-list">
              {principios.map((p, i) => (
                <div className="principio-item" key={i}>
                  <span className="principio-num">0{i + 1}</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-glow" />
        </section>

        {/* ── Estrutura Hierárquica ── */}
        <section className="section hierarquia fade-section">
          <div className="container">
            <span className="section-tag">Meritocracia</span>
            <h2>Estrutura Hierárquica</h2>
            <p className="section-desc">
              A progressão é baseada em mérito, disciplina e comprometimento com os princípios da comunidade.
            </p>
            <div className="niveis-grid">
              {niveis.map((n) => (
                <div className="nivel-card" key={n.nivel}>
                  <div className="nivel-icon">{n.icon}</div>
                  <h3>{n.nivel}</h3>
                  <p className="nivel-desc">{n.desc}</p>
                  <div className="nivel-divider" />
                  <p className="nivel-funcao">{n.funcao}</p>
                  <p className="nivel-criterio">{n.criterio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reunião ── */}
        <section className="section reuniao fade-section">
          <div className="container">
            <span className="section-tag">Protocolo</span>
            <h2>Estrutura da Reunião</h2>
            <p className="section-desc">
              Reuniões presenciais a cada 15 dias, com duração sugerida de 90 minutos.
            </p>
            <div className="etapas">
              {etapas.map((e) => (
                <div className="etapa" key={e.num}>
                  <div className="etapa-header">
                    <span className="etapa-num">{e.num}</span>
                    <div className="etapa-meta">
                      <h3>{e.titulo}</h3>
                      <span className="etapa-tempo">{e.tempo}</span>
                    </div>
                  </div>
                  <p className="etapa-desc">{e.desc}</p>
                  <div className="etapa-destaque">{e.destaque}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Postura ── */}
        <section className="section postura fade-section">
          <div className="container">
            <span className="section-tag">Postura</span>
            <h2>O Membro Libertabra</h2>
            <div className="postura-grid">
              <div className="postura-bloco nao">
                <h3>❌ Não</h3>
                <ul>
                  <li>Age como vítima</li>
                  <li>Terceiriza culpa</li>
                  <li>Idolatra políticos</li>
                  <li>Depende do sistema</li>
                  <li>Busca aprovação externa</li>
                </ul>
              </div>
              <div className="postura-bloco sim">
                <h3>✅ Ele</h3>
                <ul>
                  <li>Constrói</li>
                  <li>Estuda</li>
                  <li>Age</li>
                  <li>Honra a palavra dada</li>
                  <li>Desenvolve independência</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BackToTop />

      <style jsx>{`
        /* Hero */
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
        .hero-tag {
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
          font-size: 1.1rem;
          max-width: 580px;
          margin: 0 auto 2.5rem;
          opacity: 0.85;
        }
        .principios-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          max-width: 480px;
          margin: 0 auto;
        }
        .principio-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 0.75rem 1.25rem;
          font-weight: 600;
          font-size: 0.95rem;
          text-align: left;
        }
        .principio-num {
          color: #FFC107;
          font-weight: 800;
          font-size: 0.8rem;
          min-width: 26px;
        }
        .hero-glow {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(255,193,7,0.12), transparent 70%);
          pointer-events: none;
        }

        /* Shared */
        .section {
          padding: 4rem 0;
        }
        .section-tag {
          display: inline-block;
          background: rgba(255,193,7,0.15);
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

        /* Hierarquia */
        .hierarquia {
  background: #fff;
  text-align: center;
}
.hierarquia .section-desc {
  margin-inline: auto;
}
        .niveis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        .nivel-card {
          background: #f9f9f9;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 1.75rem 1.5rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .nivel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-color: #FFC107;
        }
        .nivel-icon {
          font-size: 1.75rem;
          margin-bottom: 0.6rem;
        }
        .nivel-card h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1A3C34;
          margin-bottom: 0.25rem;
        }
        .nivel-desc {
          font-size: 0.85rem;
          color: #999;
          margin-bottom: 0.75rem;
        }
        .nivel-divider {
          height: 1px;
          background: #eee;
          margin-bottom: 0.75rem;
        }
        .nivel-funcao {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .nivel-criterio {
          font-size: 0.82rem;
          color: #e0a800;
          font-weight: 600;
        }

        /* Reunião */
        .reuniao {
          background: #f4f4f4;
        }
        .etapas {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .etapa {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .etapa:hover {
          border-color: #FFC107;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .etapa-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .etapa-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: #FFC107;
          min-width: 40px;
        }
        .etapa-meta h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1A3C34;
          margin-bottom: 0.1rem;
        }
        .etapa-tempo {
          font-size: 0.8rem;
          color: #999;
          font-weight: 600;
        }
        .etapa-desc {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.65;
          margin-bottom: 0.75rem;
        }
        .etapa-destaque {
          font-size: 0.88rem;
          font-style: italic;
          color: #1A3C34;
          background: rgba(26,60,52,0.06);
          border-left: 3px solid #FFC107;
          padding: 0.6rem 1rem;
          border-radius: 0 8px 8px 0;
        }

        /* Postura */
        .postura {
          background: #1A3C34;
          color: #fff;
        }
        .postura .section-tag {
          background: rgba(255,193,7,0.2);
        }
        .postura h2 {
          color: #FFC107;
        }
        .postura-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }
        .postura-bloco {
          border-radius: 14px;
          padding: 2rem 1.5rem;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .postura-bloco.nao {
          background: rgba(255,255,255,0.04);
        }
        .postura-bloco.sim {
          background: rgba(255,193,7,0.08);
          border-color: rgba(255,193,7,0.3);
        }
        .postura-bloco h3 {
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: #fff;
        }
        .postura-bloco ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .postura-bloco ul li {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.8);
          padding-left: 0.5rem;
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
          .principios-list { max-width: 100%; }
        }
      `}</style>
    </>
  )
}
