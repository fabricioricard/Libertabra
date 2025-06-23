export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2025 Libertabra. Todos os direitos reservados.</p>
        <div className="space-x-4">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">X</a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Telegram</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Discord</a>
        </div>
      </div>
    </footer>
  );
}
