import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Libertabra Logo" width={40} height={40} />
          <span className="ml-2 text-xl font-bold">Libertabra</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="/sobre" className="hover:text-yellow-500">Sobre</Link>
          <Link href="/projeto" className="hover:text-yellow-500">Projeto</Link>
        </nav>

        {/* Menu Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-black px-4 py-2">
          <Link href="/" className="block py-2 hover:text-yellow-500">Home</Link>
          <Link href="/sobre" className="block py-2 hover:text-yellow-500">Sobre</Link>
          <Link href="/projeto" className="block py-2 hover:text-yellow-500">Projeto</Link>
        </nav>
      )}
    </header>
  );
}
