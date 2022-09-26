import styles from './leftblock.module.scss'
import leftIconFollowers from './../../../images/shared.png'
import leftIconFollowing from './../../../images/provate.png'
import { useSelector } from 'react-redux'

function LeftBlock() {
	const { followers, following, name, avatar_url, html_url, login } = useSelector((state) => state.repos.items)
	const newFollowers = followers > 999 ? (followers * 0.001).toFixed(1) + 'k' : followers
	const newFollowing = following > 999 ? (following * 0.001).toFixed(1) + 'k' : following
	const userName = name === null ? 'Not found name' : name
	
	return (
		<div className={styles.leftblock}>
			<img className={styles.leftimg} src={avatar_url} alt="" />
			<div className={styles.leftname}>{userName}</div>
			<div className={styles.leftnik}>
				<a href={html_url} className={styles.leftLogin} target={"_blank"} rel="noopener noreferrer">{login}</a>
			</div>
			<div className={styles.leftcontainer}>
				<div className={styles.leftfollowers}>
					<div className={styles.leftinnerfollowers}>
						<img src={leftIconFollowers} alt="" />
					</div>
					<div className={styles.leftinnerfollowers}>{newFollowers}</div>
					<div>followers</div>
				</div>
				<div className={styles.leftfollowing}>
					<div className={styles.leftinnerfollowers}>
						<img src={leftIconFollowing} alt="" />
					</div>
					<div className={styles.leftinnerfollowers}>{newFollowing}</div>
					<div>following</div>
				</div>
			</div>
		</div>
	)
}

export default LeftBlock