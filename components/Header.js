import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header>
      <Link href="/">
        <img src="/images/logo.png" alt="Logo Libertabra" className="logo" />
      </Link>
      <nav>
        <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
          Início
        </Link>
        <Link href="/protocolo" className={router.pathname === '/protocolo' ? 'active' : ''}>
          Protocolo
        </Link>
        <Link href="/projeto" className={router.pathname === '/projeto' ? 'active' : ''}>
          Projeto
        </Link>
      </nav>
    </header>
  )
}
