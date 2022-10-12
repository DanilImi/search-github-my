import Header from '../Header/Header'
import imaga from '../../images/Frame.svg'
import styles from './Layout.module.scss'

const Layout = ({children}) => {
  
  return (
    <>
      <div className={styles.wrapper}>
		    <img style={{margin: '0 8px 0 8px'}} src={imaga} alt='' />
        <Header />  
      </div>
      <div>
        {children}
      </div>
    </>  
  )
}

export default Layout
