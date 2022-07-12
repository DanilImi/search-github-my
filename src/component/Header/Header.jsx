import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getRepos, newGetReposALL } from './../action/repos';
import { useEffect } from 'react';

import styles from './header.module.scss';
import HeaderIcon from './HeaderIcon/HeaderIcon';
import { setCurrentPage } from '../../redusers/reposReducer';



function Header(header) {
	const dispatch = useDispatch()
	const [searchValue, setSearchValue] = useState("")
	
	useEffect(() => {
		dispatch(newGetReposALL(searchValue, header.headerCurrentPage, header.headerPerPage))
	}, [header.headerCurrentPage])

	function searchHandle() {
		dispatch(setCurrentPage(1))
		dispatch(getRepos(searchValue, header.headerCurrentPage, header.headerPerPage))
	}


	return (
		<div className={styles.header}>
			<HeaderIcon />
			<div className={styles.parentHeaderInput}>
				<input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.headerinput} />
			</div>
			<button className={styles.headerButton} onClick={() => searchHandle()}>SEARCH</button>
		</div>
	)
}

export default Header