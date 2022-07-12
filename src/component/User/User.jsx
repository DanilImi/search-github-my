import React from 'react'
import LeftBlock from './LeftBlock/LeftBlock'
import RightBlock from './RightBlock/RightBlock'
import styles from './user.module.scss'

function User(props) {
	return (
		<div className={styles.user}>
			<LeftBlock repo={props.repo} />
			<RightBlock repo={props.reposAll}
				totalCount={props.totalCount}
				currentPage={props.currentPage}
				perPage={props.perPage}
				isFetchingRepos={props.isFetchingRepos} />
		</div>
	)
}

export default User