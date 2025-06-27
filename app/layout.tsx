import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="pt-16 bg-white text-gray-900">
        <Header />
        <main className="min-h-screen max-w-6xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
