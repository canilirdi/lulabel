import { useState } from 'react'
import { useCart } from '../context/CartContext'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const { add } = useCart()
  const [selected, setSelected] = useState(null)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    if (!selected) { setSelected(product.sizes[0]); return }
    add(product, selected)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className={styles.card}>
      {product.badge && (
        <div className={styles.badge}
          style={{ background: product.badge === 'Sale' ? '#e07fa0' : product.badge === 'Low Stock' ? '#c9a84c' : '#c9b1e8' }}>
          {product.badge}
        </div>
      )}

      <div className={styles.imgBox} style={{ background: `${product.color}40` }}>
        <span className={styles.emoji}>{product.emoji}</span>
      </div>

      <div className={styles.info}>
        <div className={styles.brand}>{product.brand}</div>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>€{product.price}</div>

        <div className={styles.sizes}>
          {product.sizes.map(s => (
            <button key={s}
              className={`${styles.size} ${selected === s ? styles.sizeActive : ''}`}
              onClick={() => setSelected(s)}>
              {s}
            </button>
          ))}
        </div>

        <button className={`${styles.addBtn} ${added ? styles.added : ''}`} onClick={handleAdd}>
          {added ? '✓ Added to Bag' : selected ? 'Add to Bag' : 'Select Size'}
        </button>
      </div>
    </div>
  )
}
