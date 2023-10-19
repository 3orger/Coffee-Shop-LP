import classNames from 'classnames'
import styles from './Button.module.scss'

export const Button = ({ children, className }) => {
  return <button className={classNames(styles.root, className)}>{children}</button>
}
