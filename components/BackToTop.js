import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`back-to-top ${show ? 'back-to-top-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  )
}
