import { categories } from '../data/products'
import styles from './Categories.module.css'

export default function Categories() {
  return (
    <section className={styles.section} id="categories">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>Shop by Category</p>
          <h2 className={styles.title}>Find the Perfect Look</h2>
        </div>
        <div className={styles.grid}>
          {categories.map(c => (
            <a key={c.key} href={`#${c.key}`} className={styles.card}>
              <div className={styles.icon} style={{ background: c.color }}>{c.emoji}</div>
              <h3 className={styles.label}>{c.label}</h3>
              <p className={styles.desc}>{c.desc}</p>
              <span className={styles.arrow}>Shop →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
