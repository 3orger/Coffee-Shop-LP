import { Menu } from '../Menu/Menu'
import styles from './Header.module.scss'

export const Header = ({ children, menu }) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src='/images/logo.png' alt='Alowishus Delicious Coffee' />
      <div className={styles.headerContent}>
        <Menu menu={menu} />
        <button className={styles.button}></button>
        <button className={styles.buttonBuy}>Buy gift vouchers</button>
      </div>
    </header>
  )
}
