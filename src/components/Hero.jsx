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
            src="https://instagram.ftia5-1.fna.fbcdn.net/v/t51.2885-19/475784670_2474231816255400_5361282673595829482_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43NTcuYzIifQ&_nc_ht=instagram.ftia5-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2gGsmB0d1CJ_qvKfyPFcekE-01Uast3Pf9ssh45B0i_L1afeapFW-SjwDI-MnrsN4xA&_nc_ohc=3c5EiM-MbLYQ7kNvwG_5fOz&_nc_gid=JMw_Yr_Zcqy_MbJBFCp2Bg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af4W_DIGXTRmoA4h8QSlQLw9UHq2Hws0ygdSUH21MhRrVA&oe=6A0E918E&_nc_sid=22de04"
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
