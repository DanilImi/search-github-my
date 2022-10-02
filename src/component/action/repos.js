import axios from 'axios'
import { setIsFetching, 
	setIsFetchingRepos, 
	setIsFetchingReposAll, 
	setRepos, 
	setReposAll, 
	setReposName 
} from '../../redusers/reposReducer'


export const getRepos = (props, currentPage, perPage) => {
	if (props == '') {
		return
	}
	return async (dispatch) => {
		dispatch(setIsFetching(true))
		try {
			const [response, secondResponse] = await axios.all([
				axios.get(`https://api.github.com/users/${props}`),
				axios.get(`https://api.github.com/users/${props}/repos?per_page=${perPage}&page=${currentPage}`)
			])
			dispatch(setReposName(props))
			dispatch(setRepos(response.data))
			dispatch(setReposAll(secondResponse.data))
		} catch (error) {
			console.log(error)
			dispatch(setIsFetchingRepos(error))
		}
	}
}

export const newGetReposALL = (props, currentPage, perPage) => {
	return async (dispatch) => {
		dispatch(setIsFetchingReposAll(true))
		try {
			const newSecondResponse = await axios.get(`https://api.github.com/users/${props}/repos?per_page=${perPage}&page=${currentPage}`)
			dispatch(setReposAll(newSecondResponse.data))
		} catch(error) {
			console.log(error)
		}
	}
}
