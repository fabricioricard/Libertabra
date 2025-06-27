export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center py-20">
      <h1 className="text-5xl font-bold mb-6 text-blue-700">Bem-vindo ao Libertabra</h1>
      <p className="text-xl max-w-xl mb-6 text-gray-700">
        Uma nova proposta de comunidade autônoma, livre e conectada com o futuro.
      </p>
      <img
        src="/city.jpg"
        alt="Cidade Libertabra"
        className="rounded-2xl shadow-xl w-full max-w-3xl"
      />
    </section>
  );
}
