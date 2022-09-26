import Layout from '../common/Layout'
import styles from './Main.module.scss'
import iconMain from './../../images/images.png'

const Main = () => {
  return (
	 <div className={styles.main}>
		<Layout />
		<img className={styles.mainIcon} src={iconMain} alt="" />
		<div className={styles.mainText}>Start with searching a GitHub user</div>
	 </div>
  )
}

export default Main