import { getUserProfile } from "../Redux/reducers/userProfile"

export const fetchUserProfile = (id) => {
	return dispatch => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(response => response.json())
			.then(json => dispatch(getUserProfile(json)))
	}
}