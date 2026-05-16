import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import styles from './Nav.module.css'

const links = ['New In', 'Girls', 'Boys', 'Baby', 'Accessories', 'Brands', 'Sale']

export default function Nav() {
  const { count, setOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>

          <a href="#home" className={styles.logo}>
            <img
              src="/logo.jpg"
              alt="Lulabel"
              className={styles.logoImg}
              onError={e => { e.currentTarget.style.display='none'; e.currentTarget.nextSibling.style.display='block' }}
            />
            <span className={styles.logoText} style={{ display: 'none' }}>lulabel</span>
          </a>

          <ul className={styles.links}>
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(' ', '-')}`}
                   className={l === 'Sale' ? styles.sale : ''}>
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7"/><path strokeLinecap="round" d="m16.5 16.5 4 4"/>
              </svg>
            </button>
            <button className={styles.cartBtn} onClick={() => setOpen(true)} aria-label="Cart">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                  d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
              </svg>
              {count > 0 && <span className={styles.badge}>{count}</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
             onClick={() => setMenuOpen(false)}
             className={l === 'Sale' ? styles.saleMobile : ''}>
            {l}
          </a>
        ))}
      </div>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </>
  )
}
