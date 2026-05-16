import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <img src="https://instagram.ftia5-1.fna.fbcdn.net/v/t51.2885-19/475784670_2474231816255400_5361282673595829482_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43NTcuYzIifQ&_nc_ht=instagram.ftia5-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2gGsmB0d1CJ_qvKfyPFcekE-01Uast3Pf9ssh45B0i_L1afeapFW-SjwDI-MnrsN4xA&_nc_ohc=3c5EiM-MbLYQ7kNvwG_5fOz&_nc_gid=JMw_Yr_Zcqy_MbJBFCp2Bg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af4W_DIGXTRmoA4h8QSlQLw9UHq2Hws0ygdSUH21MhRrVA&oe=6A0E918E&_nc_sid=22de04" alt="Lulabel" className={styles.logoImg}
              onError={e => { e.currentTarget.style.display='none'; e.currentTarget.nextSibling.style.display='block' }} />
            <div className={styles.logo} style={{ display: 'none' }}>lulabel</div>
            <p className={styles.desc}>Luxury childrenswear, curated with love in Albania. Official stockist of the world's finest kids' fashion brands.</p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/lulabel.al/" target="_blank" rel="noopener" className={styles.social}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Shop</h4>
            <ul>
              {['New In', 'Girls', 'Boys', 'Baby', 'Accessories', 'Sale'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase().replace(' ','-')}`}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Brands</h4>
            <ul>
              {['Gucci Kids', 'Burberry', 'Moncler', 'Fendi Kids', 'Versace', 'D&G Kids'].map(b => (
                <li key={b}><a href="#brands">{b}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Help</h4>
            <ul>
              {['Delivery Info', 'Returns', 'Size Guide', 'Authenticity', 'Contact Us'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
            <div className={styles.contact}>
              <p>📍 Tirana, Albania</p>
              <a href="https://www.instagram.com/lulabel.al/" target="_blank" rel="noopener">@lulabel.al</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 Lulabel. All rights reserved.</span>
          <span>🔒 Secure payments · 🇦🇱 Albania-wide delivery · ✓ 100% Authentic</span>
        </div>
      </div>
    </footer>
  )
}
