import React from 'react'
import { UserCard } from '../UserCard/UserCard'

export const UserList = ({ users }) => {
	return (
		<div className='userList'>
			{users.map(user =>
				<UserCard key={user.name} user={user} />
			)}
			<div style={{ textAlign: 'right' }}>
				{`Найдено ${users.length} пользователей`}
			</div>
		</div>
	)
}
