import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { getRepos, newGetReposALL } from './../action/repos';

import styles from './header.module.scss';
import { setCurrentPage } from '../../redusers/reposReducer';
import { useNavigate } from 'react-router-dom';
import { debounce } from '../../utils/debounceFunc';



const Header = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const  {currentPage, perPage, reposName, items} = useSelector((state) => state.repos)

	const searchHandle = (event) => {
		const {value} = event.target
		dispatch(setCurrentPage(1))
		dispatch(getRepos(value, currentPage, perPage))
	}

	const debouncedChangeHandler = useMemo(() => debounce(searchHandle), [])

  useEffect(() => {
    if(items.length === 0){
      navigate('/')
    }else{
      navigate('/user')
    }
  }, [items])
	
	
	useEffect(() => {
		dispatch(newGetReposALL(reposName, currentPage, perPage))
	}, [currentPage])
	

	return (
		<>
			<div className={styles.header}>
				<span className='material-icons-outlined'>search</span>
				<input
					type='text'  
					onChange={debouncedChangeHandler} 
					placeholder='Enter GitHub username' 
				/>
			</div>

		</>
	)
}

export default Header