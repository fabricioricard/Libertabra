import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Banner */}
      <div className="relative h-[80vh] w-full">
        <Image
          src="/city.jpg"
          alt="Cidade Libertabra"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à Libertabra</h1>
          <p className="text-xl max-w-2xl mb-6">
            Construindo uma cidade privada autossustentável baseada na liberdade individual e no livre mercado.
          </p>
          <div className="space-x-4">
            <Link
              href="/projeto"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600"
            >
              Conheça o Projeto
            </Link>
            <Link
              href="/sobre"
              className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>

      {/* Seção de Introdução */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Por que Libertabra?</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Somos uma comunidade dedicada a criar um futuro onde a cooperação voluntária, a inovação e a sustentabilidade prosperam sem coerção estatal.
        </p>
      </section>
    </div>
  );
}
