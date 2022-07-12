import React from 'react'
import styles from './headericon.module.scss'
import imaga from '../../../images/Frame.svg'

function HeaderIcon() {
  return (
	 <div className={styles.headerIcon}>
		<img src={imaga} alt='' />
	 </div>
  )
}

export default HeaderIcon