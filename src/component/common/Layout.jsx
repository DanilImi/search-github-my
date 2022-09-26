import { useEffect } from 'react'
import Header from '../Header/Header'
import imaga from '../../images/Frame.svg'
import styles from './Layout.module.scss'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
  
  const navigate = useNavigate()
  const repos = useSelector(state => state.repos.items)
	const newIsError = useSelector(state => state.repos.isError)
	const  isFetching = useSelector((state) => state.repos.isFetching)
	const  {currentPage, perPage} = useSelector((state) => state.repos)
  useEffect(() => { 
    if(isFetching === false){
      if(repos.length === 0){
        if(newIsError !== 0){
          navigate('/empty')
        }else{
          navigate('/')
        }
      }else{
        navigate('/user')
      }
    }
  }, [repos])
  return (
    <div className={styles.wrapper}>
		  <img className={styles.wrapperImg} src={imaga} alt='' />
      <Header headerCurrentPage={currentPage} headerPerPage={perPage}/>  
    </div>
  )
}

export default Layout
