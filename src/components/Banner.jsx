import styles from './Banner.module.css'

export default function Banner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.emoji}>🎀</span>
            <div>
              <h2 className={styles.title}>Gift Wrapping Available</h2>
              <p className={styles.desc}>Make every moment magical with our complimentary luxury gift wrapping service.</p>
            </div>
          </div>
          <a href="#new-in" className={styles.btn}>Shop Now →</a>
        </div>
      </div>
    </section>
  )
}
