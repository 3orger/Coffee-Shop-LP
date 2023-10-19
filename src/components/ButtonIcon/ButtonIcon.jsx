import classNames from 'classnames'
import styles from './ButtonIcon.module.scss'

export const ButtonIcon = ({ icon, className }) => {
  return (
    <button className={classNames(styles.root, className)}>
      <img src={icon} alt='Icon' />
    </button>
  )
}
