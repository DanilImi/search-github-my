import React from 'react'
import styles from './leftblock.module.scss'
import leftIconFollowers from './../../../images/shared.png'
import leftIconFollowing from './../../../images/provate.png'

function LeftBlock(props) {
	let newProps = props.repo
	let followers = newProps.followers > 999 ? (newProps.followers * 0.001).toFixed(1) + 'k' : newProps.followers
	let following = newProps.following > 999 ? (newProps.following * 0.001).toFixed(1) + 'k' : newProps.following
	let userName = newProps.name === null ? 'Not found name' : newProps.name
	
	return (
		<div className={styles.leftblock}>
			<img className={styles.leftimg} src={newProps.avatar_url} alt="" />
			<div className={styles.leftname}>{userName}</div>
			<div className={styles.leftnik}>
				<a href={newProps.html_url} className={styles.leftLogin} target={"_blank"} rel="noopener noreferrer">{newProps.login}</a>
			</div>
			<div className={styles.leftcontainer}>
				<div className={styles.leftfollowers}>
					<div className={styles.leftinnerfollowers}>
						<img src={leftIconFollowers} alt="" />
					</div>
					<div className={styles.leftinnerfollowers}>{followers}</div>
					<div>followers</div>
				</div>
				<div className={styles.leftfollowing}>
					<div className={styles.leftinnerfollowers}>
						<img src={leftIconFollowing} alt="" />
					</div>
					<div className={styles.leftinnerfollowers}>{following}</div>
					<div>following</div>
				</div>
			</div>
		</div>
	)
}

export default LeftBlock