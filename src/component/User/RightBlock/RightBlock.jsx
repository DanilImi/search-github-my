import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../../redusers/reposReducer'
import { createPages } from '../../../utils/pagesCreator'
import Reposit from './Reposit/Reposit'
import styles from './rightblock.module.scss'


const RightBlock = () => {
	const { currentPage, perPage, totalCount, isFetchingRepos, reposAll } = useSelector((state) => state.repos)
	const dispatch = useDispatch()
	const pagesCount = Math.ceil(totalCount / perPage)
	const pages = []
	createPages(pages, pagesCount, currentPage)
	return (
		<div className={styles.rightblock}>
			<div className={styles.rightHeadReposit}>Repositories({totalCount})</div>
			{
				isFetchingRepos === false
					?
					reposAll.map((index) => {
						return <Reposit key={index.id} repo={index} />
					})
					:
					<div className={styles.fetching}></div>
			}

			<div className={styles.pages}>
				{pages.map((page, index) => <span key={index}
					className={currentPage === page ? styles.currentpage : styles.page}
					onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
			</div>

		</div>
	)
}

export default RightBlock