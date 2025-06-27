"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Libertabra
        </Link>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>

        <nav className={`flex-col md:flex-row md:flex gap-6 ${menuOpen ? "flex" : "hidden"} md:items-center`}>
          <Link href="/" className="text-gray-700 hover:text-blue-600">Início</Link>
          <Link href="/projeto" className="text-gray-700 hover:text-blue-600">Projeto Cidade</Link>
          <Link href="/sobre" className="text-gray-700 hover:text-blue-600">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
