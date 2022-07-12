import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../../redusers/reposReducer'
import { createPages } from '../../../utils/pagesCreator'
import Reposit from './Reposit/Reposit'
import styles from './rightblock.module.scss'


function RightBlock(props) {
	let rightProps = props.repo
	const dispatch = useDispatch()
	const pagesCount = Math.ceil(props.totalCount / props.perPage)
	const pages = []
	createPages(pages, pagesCount, props.currentPage)
	return (
		<div className={styles.rightblock}>
			<div className={styles.rightHeadReposit}>Repositories({props.totalCount})</div>
			{
				props.isFetchingRepos === false
					?
					rightProps.map((index) => {
						return <Reposit key={index.id} repo={index} />
					})
					:
					<div className={styles.fetching}></div>
			}

			<div className={styles.pages}>
				{pages.map((page, index) => <span key={index}
					className={props.currentPage === page ? styles.currentpage : styles.page}
					onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
			</div>

		</div>
	)
}

export default RightBlock