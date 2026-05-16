import { useCart } from '../context/CartContext'
import styles from './Cart.module.css'

export default function Cart() {
  const { items, remove, total, count, open, setOpen } = useCart()

  return (
    <>
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
      <div className={`${styles.drawer} ${open ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Bag {count > 0 && <span>({count})</span>}</h2>
          <button className={styles.close} onClick={() => setOpen(false)}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <span>🛍️</span>
            <p>Your bag is empty</p>
            <button className={styles.continueBtn} onClick={() => setOpen(false)}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map(item => (
                <div key={item.key} className={styles.item}>
                  <div className={styles.itemEmoji} style={{ background: `${item.color}40` }}>
                    {item.emoji}
                  </div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemBrand}>{item.brand}</div>
                    <div className={styles.itemName}>{item.name}</div>
                    <div className={styles.itemMeta}>Size: {item.size} · Qty: {item.qty}</div>
                  </div>
                  <div className={styles.itemRight}>
                    <div className={styles.itemPrice}>€{item.price * item.qty}</div>
                    <button className={styles.removeBtn} onClick={() => remove(item.key)}>✕</button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Total</span>
                <strong>€{total}</strong>
              </div>
              <button className={styles.checkoutBtn}>Proceed to Checkout →</button>
              <p className={styles.hint}>Free delivery across Albania on orders over €200</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}
