import Layout from '../common/Layout'
import styles from './Main.module.scss'
import emptyIcon from '../../images/user.png'
import iconMain from './../../images/images.png'
import { useSelector } from 'react-redux'

const Main = () => {
	const newIsError = useSelector(state => state.repos.isError)
  return (
		<Layout>
			<div className={styles.empty}>
				<img src={newIsError !== 0 ? emptyIcon : iconMain} alt="" />
				<div>{newIsError !== 0 ? 'User not found' : 'Start with searching a GitHub user'}</div>
			</div>
		</Layout>
  )
}

export default Main