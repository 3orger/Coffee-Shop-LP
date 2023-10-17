import { Menu } from '../Menu/Menu'
import styles from './Header.module.scss'

export const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src='/images/logo.png' alt='Alowishus Delicious Coffee' />
      <Menu />
    </header>
  )
}
