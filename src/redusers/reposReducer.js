const SET_REPOS = 'SET_REPOS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IS_FETCHING_REPOS = 'SET_IS_FETCHING_REPOS'
const SET_IS_REPOS_ALL = 'SET_IS_REPOS_ALL'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING_REPOS_ALL = 'SET_IS_FETCHING_REPOS_ALL'
const SET_REPOS_Name = 'SET_REPOS_Name'

const defaultState = {
	items: [],
	reposAll: [],
	isFetching: false,
	isFetchingRepos: false,
	isError: 0,
	currentPage: 1,
	perPage: 4,
	totalCount: 0,
	reposName: ''
}

export default function reposReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_REPOS:
			return {
				...state,
				isError: 0,
				items: action.payload,
				isFetching: false,
				totalCount: action.payload.public_repos,
			}
		case SET_IS_REPOS_ALL:
			return {
				...state,
				isFetchingRepos: false,
				reposAll: action.payload,
			}
		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.payload,
			}
		case SET_IS_FETCHING_REPOS:
			return {
				...state,
				items: [],
				isError: action.payload,
				isFetching: false,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			}
		case SET_IS_FETCHING_REPOS_ALL:
			return {
				...state,
				isFetchingRepos: action.payload,
			}
		case SET_REPOS_Name:
			return {
				...state,
				reposName: action.payload,
			}
		default:
			return state
	}
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos })
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool })
export const setIsFetchingRepos = (int) => ({ type: SET_IS_FETCHING_REPOS, payload: int })
export const setReposAll = (reposAll) => ({ type: SET_IS_REPOS_ALL, payload: reposAll })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page })
export const setIsFetchingReposAll = (boolFetching) => ({ type: SET_IS_FETCHING_REPOS_ALL, payload: boolFetching })
export const setReposName = (reposName) => ({ type: SET_REPOS_Name, payload: reposName })






