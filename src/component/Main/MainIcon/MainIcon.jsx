import React from 'react'
import styles from './mainicon.module.scss'
import iconMain from './../../../images/images.png'

function MainIcon() {
  return (
	 <div className={styles.mainicon}>
		<img src={iconMain} alt="" />
	 </div>
  )
}

export default MainIcon