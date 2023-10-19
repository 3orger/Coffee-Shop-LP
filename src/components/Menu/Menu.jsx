import styles from './Menu.module.scss'

export const Menu = ({ menu }) => {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {menu.map((item) => (
          <li className={styles.item} key={item.id}>
            <a className={styles.link} href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
