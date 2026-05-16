import { brands } from '../data/products'
import styles from './Brands.module.css'

export default function Brands() {
  return (
    <section className={styles.section} id="brands">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>Our Partners</p>
          <h2 className={styles.title}>The World's Finest Brands</h2>
          <p className={styles.sub}>We are an authorised stockist of the world's most coveted luxury childrenswear labels.</p>
        </div>
        <div className={styles.grid}>
          {brands.map(b => (
            <div key={b.name} className={styles.card} style={{ background: b.bg }}>
              <div className={styles.brandName} style={{ color: b.color }}>{b.short}</div>
              <div className={styles.brandFull}>{b.name}</div>
            </div>
          ))}
        </div>
        <div className={styles.note}>
          ✓ 100% Authentic · ✓ Official Retailer · ✓ Albania-wide Delivery
        </div>
      </div>
    </section>
  )
}
