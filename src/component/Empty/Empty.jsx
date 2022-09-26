import Layout from '../common/Layout'
import styles from './Empty.module.scss'
import emptyIcon from '../../images/user.png'

const Empty = () => {
  return (
	 <div className={styles.empty}>
		<Layout />
		<img className={styles.emptyIcon} src={emptyIcon} alt="" />
		<div className={styles.emptyText}>User not found</div>
	 </div>
  )
}

export default Empty