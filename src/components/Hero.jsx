import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg} />

      {/* Floating bubbles */}
      <div className={styles.bubble} style={{ width:180, height:180, top:'10%', left:'5%', background:'rgba(242,167,195,.18)' }} />
      <div className={styles.bubble} style={{ width:120, height:120, top:'60%', left:'2%', background:'rgba(201,177,232,.18)' }} />
      <div className={styles.bubble} style={{ width:100, height:100, top:'20%', right:'8%', background:'rgba(168,216,200,.2)' }} />
      <div className={styles.bubble} style={{ width:200, height:200, bottom:'5%', right:'3%', background:'rgba(240,208,128,.15)' }} />

      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <img
            src="/logo.jpg"
            alt="Lulabel"
            className={styles.heroLogo}
            onError={e => { e.currentTarget.style.display='none' }}
          />
        </div>
        <div className={styles.eyebrow}>✨ New Summer Collection 2025</div>
        <h1 className={styles.title}>
          Little Ones,<br />
          <span className={styles.grad}>Big Style.</span>
        </h1>
        <p className={styles.desc}>
          Curated luxury childrenswear from the world's finest brands —
          delivered to your door across Albania.
        </p>
        <div className={styles.actions}>
          <a href="#new-in" className={styles.btnPrimary}>Shop New In</a>
          <a href="#brands" className={styles.btnSecondary}>Our Brands</a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}><strong>20+</strong><span>Luxury Brands</span></div>
          <div className={styles.divider} />
          <div className={styles.stat}><strong>500+</strong><span>Products</span></div>
          <div className={styles.divider} />
          <div className={styles.stat}><strong>🇦🇱</strong><span>Albania-wide Delivery</span></div>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.card1}>
          <span className={styles.cardEmoji}>👗</span>
          <div className={styles.cardBrand}>Gucci Kids</div>
          <div className={styles.cardName}>GG Logo Dress</div>
          <div className={styles.cardPrice}>€320</div>
        </div>
        <div className={styles.card2}>
          <span className={styles.cardEmoji}>🧥</span>
          <div className={styles.cardBrand}>Moncler</div>
          <div className={styles.cardName}>Puffer Jacket</div>
          <div className={styles.cardPrice}>€590</div>
        </div>
        <div className={styles.card3}>
          <span className={styles.cardEmoji}>👟</span>
          <div className={styles.cardBrand}>Versace</div>
          <div className={styles.cardName}>Medusa Sneakers</div>
          <div className={styles.cardPrice}>€270</div>
        </div>
      </div>
    </section>
  )
}
