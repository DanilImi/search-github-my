import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getRepos, newGetReposALL } from './../action/repos';

import styles from './header.module.scss';
import { setCurrentPage } from '../../redusers/reposReducer';



const Header = (header) => {
	const dispatch = useDispatch()
	const [searchValue, setSearchValue] = useState("")
	const valueName = useSelector((state) => state.repos.reposName)
	

	useEffect(() => {
		dispatch(newGetReposALL(valueName, header.headerCurrentPage, header.headerPerPage))
	}, [header.headerCurrentPage])

	function searchHandle() {
		dispatch(setCurrentPage(1))
		dispatch(getRepos(searchValue, header.headerCurrentPage, header.headerPerPage))
	}


	return (
		<div className={styles.header}>
			<div className={styles.parentHeaderInput}>
				<input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.headerinput} />
			</div>
			<button className={styles.headerButton} onClick={() => searchHandle()}>SEARCH</button>
		</div>
	)
}

export default Header