import { Button } from '../Button/Button'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import { Menu } from '../Menu/Menu'
import styles from './Header.module.scss'

export const Header = ({ children, menu }) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src='/images/logo.png' alt='Alowishus Delicious Coffee' />
      <div className={styles.headerContent}>
        <Menu menu={menu} />
        <ButtonIcon className={styles.basket} icon={'/images/icons/basket.svg'} />
        <Button className={styles.buy}>Buy gift vouchers</Button>
      </div>
    </header>
  )
}
