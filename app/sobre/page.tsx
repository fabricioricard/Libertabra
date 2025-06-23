export default function Sobre() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre a Libertabra</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
        <p className="text-lg">
          Promover a liberdade individual e construir uma cidade privada autossustentável onde a cooperação voluntária e o livre mercado sejam os pilares da sociedade.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Propriedade privada como base da liberdade.</li>
          <li>Voluntarismo em todas as interações.</li>
          <li>Inovação e sustentabilidade para o futuro.</li>
          <li>Respeito absoluto aos direitos individuais.</li>
        </ul>
      </section>
    </div>
  );
}
