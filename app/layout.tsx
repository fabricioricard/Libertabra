import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="pt-16 bg-gradient-to-b from-white to-blue-50 min-h-screen text-gray-800">
        <Header />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
