"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Libertabra
        </Link>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
        >
          <FaBars size={24} />
        </button>

        <nav className={`md:flex gap-6 ${open ? "block mt-4" : "hidden md:block"}`}>
          <Link href="/" className="hover:text-blue-600">Início</Link>
          <Link href="/projeto" className="hover:text-blue-600">Projeto</Link>
          <Link href="/sobre" className="hover:text-blue-600">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
