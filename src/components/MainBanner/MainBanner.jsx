import styles from './MainBanner.module.scss'

export const MainBanner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Alowishus Delicious Coffee <img src='/images/award.png' alt='award' />
        </h1>
        <p className={styles.text}>
          A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.
        </p>
        <div className={styles.actions}>
          <button className={styles.button}>Download App</button>
          <a className={styles.link} href='#'>
            Shop Coffee
          </a>
        </div>
      </div>
      <img className={styles.image} src='/images/main-banner.png' alt='Alowishus Delicious Coffee' />
    </div>
  )
}
