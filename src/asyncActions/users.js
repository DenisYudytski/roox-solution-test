import { addUsers } from "../Redux/reducers/users"

export const fetchUsers = () => {
	return dispatch => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => dispatch(addUsers(json)))
	}
}