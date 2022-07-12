import { useSelector } from 'react-redux';
import styles from './App.module.scss';
import Empty from './component/Empty/Empty';
import Header from './component/Header/Header';
import User from './component/User/User';
import Main from './component/Main/Main';

function App() {
	const repos = useSelector(state => state.repos.items)
	const newIsError = useSelector(state => state.repos.isError)
	const { currentPage, perPage, totalCount, isFetching, reposAll, isFetchingRepos } = useSelector((state) => state.repos)

	return (
		<div className={styles.newBody}>
			<Header headerCurrentPage={currentPage} headerPerPage={perPage} />
			{
				isFetching === false
					?
					((repos.length === 0) ? ((newIsError !== 0) ? <Empty /> : <Main />) : <User repo={repos} reposAll={reposAll} totalCount={totalCount} currentPage={currentPage} perPage={perPage} isFetchingRepos={isFetchingRepos} />)
					:
					<div className={styles.fetching}></div>
			}
		</div>
	);
}

export default App;
