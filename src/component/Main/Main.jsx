import React from 'react'
import styles from './main.module.scss'
import MainIcon from './MainIcon/MainIcon'
import MainText from './MainText/MainText'

function Main() {
  return (
	 <div className={styles.main}>
		<MainIcon />
		<MainText />
	 </div>
  )
}

export default Main