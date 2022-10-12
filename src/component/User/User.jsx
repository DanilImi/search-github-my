import Layout from '../common/Layout'
import LeftBlock from './LeftBlock/LeftBlock'
import RightBlock from './RightBlock/RightBlock'
import styles from './user.module.scss'

const User = () => {
	return (
		<Layout>
			<div className={styles.user}>
				<LeftBlock />
				<RightBlock />
			</div>
		</Layout>
	)
}

export default User