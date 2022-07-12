import React from 'react'
import styles from './headerinput.module.scss'

function HeaderInput() {
	return (
		<div className={styles.parentHeaderInput}>
			<input className={styles.headerinput} />
		</div>
	)
}

export default HeaderInput