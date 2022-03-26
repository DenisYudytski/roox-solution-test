import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../asyncActions/users'
import { Loader } from '../../components/UI/loader/Loader'
import { UserList } from '../../components/UserList/UserList'
import { setUsersLoading } from '../../Redux/reducers/users'
import './UserListPage.scss'

export const UserListPage = () => {
	const users = useSelector(state => state.users.users)
	const loading = useSelector(state => state.users.usersLoading)
	const dispatch = useDispatch()
	useEffect(() => {
		if (loading === null) {
			dispatch(setUsersLoading("loading"))
			dispatch(fetchUsers())
			setTimeout(() => {
				dispatch(setUsersLoading("load"))
			}, 500)                                 //таймаут что б видно было

		}

	}, [loading])
	console.log(users);
	return (
		<div className='userListPage'>
			<h2>Список пользователей</h2>
			<UserList users={users} />
			{loading === "loading" ?
				<div className='loader-wrapper'><Loader /></div>
				:
				null
			}
		</div>
	)
}
