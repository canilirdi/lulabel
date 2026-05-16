import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'
import styles from './ProductGrid.module.css'

const tabs = ['All', 'Girls', 'Boys', 'Baby', 'Accessories']

export default function ProductGrid({ id = 'new-in', title = 'New In', subtitle = 'The latest arrivals from our luxury brands', filter = null }) {
  const [active, setActive] = useState('All')
  const filtered = (filter ? products.filter(p => p.category === filter) : products)
    .filter(p => active === 'All' || p.category === active.toLowerCase())

  return (
    <section className={styles.section} id={id}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>Lulabel Picks</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.sub}>{subtitle}</p>
        </div>

        {!filter && (
          <div className={styles.tabs}>
            {tabs.map(t => (
              <button key={t}
                className={`${styles.tab} ${active === t ? styles.tabActive : ''}`}
                onClick={() => setActive(t)}>
                {t}
              </button>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
