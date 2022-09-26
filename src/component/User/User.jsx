import Layout from '../common/Layout'
import LeftBlock from './LeftBlock/LeftBlock'
import RightBlock from './RightBlock/RightBlock'
import styles from './user.module.scss'

const User = () => {
	return (
		<div className={styles.user}>
			<Layout />
			<div className={styles.user_wrapper}>
				<LeftBlock />
				<RightBlock />
			</div>
		</div>
	)
}

export default User