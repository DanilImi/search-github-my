import React from 'react'
import styles from './empty.module.scss'
import EmptyIcon from './EmptyIcon/EmptyIcon'
import EmptyText from './EmptyText/EmptyText'

function Empty() {
  return (
	 <div className={styles.empty}>
		<EmptyIcon />
		<EmptyText />
	 </div>
  )
}

export default Empty