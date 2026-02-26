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
          Protocolo Libertabra
        </Link>
        <Link href="/projeto" className={router.pathname === '/projeto' ? 'active' : ''}>
          Projeto da Cidade Privada
        </Link>
      </nav>
    </header>
  )
}
