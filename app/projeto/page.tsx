import Image from "next/image";

export default function Projeto() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Projeto Cidade Libertabra</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/city.jpg"
            alt="Conceito da Cidade Libertabra"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Uma Visão de Liberdade</h2>
          <p className="text-lg mb-4">
            A Cidade Libertabra será um modelo de sociedade baseada em princípios libertários, com:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Energia renovável e agricultura sustentável.</li>
            <li>Governança por contratos privados e arbitragem.</li>
            <li>Economia baseada em criptomoedas e trocas voluntárias.</li>
            <li>Infraestrutura planejada para 10.000+ moradores.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
