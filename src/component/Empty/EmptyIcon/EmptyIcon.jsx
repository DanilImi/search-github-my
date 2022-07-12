import React from 'react'
import styles from './emptyicon.module.scss'
import emptyicon from './../../../images/user.png'

function EmptyIcon() {
	return (
		<div className={styles.emptyicon}>
			<img src={emptyicon} alt="" />
		</div>
	)
}

export default EmptyIcon