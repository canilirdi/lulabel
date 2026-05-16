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
              src="https://instagram.ftia5-1.fna.fbcdn.net/v/t51.2885-19/475784670_2474231816255400_5361282673595829482_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43NTcuYzIifQ&_nc_ht=instagram.ftia5-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2gGsmB0d1CJ_qvKfyPFcekE-01Uast3Pf9ssh45B0i_L1afeapFW-SjwDI-MnrsN4xA&_nc_ohc=3c5EiM-MbLYQ7kNvwG_5fOz&_nc_gid=JMw_Yr_Zcqy_MbJBFCp2Bg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af4W_DIGXTRmoA4h8QSlQLw9UHq2Hws0ygdSUH21MhRrVA&oe=6A0E918E&_nc_sid=22de04"
              alt="Lulabel"
              className={styles.logoImg}
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }}
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
