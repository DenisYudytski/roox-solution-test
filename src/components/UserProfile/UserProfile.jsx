import React, { useState } from 'react'
import { MyButton } from '../UI/button/MyButton'
import { UserProfileForm } from '../userProfileForm/UserProfileForm'
import './UserProfile.scss'

export const UserProfile = ({ userProfile }) => {

	const [status, setStatus] = useState('disabled')

	const edit = () => {
		if (status !== null) {
			setStatus(null)
		} else {
			setStatus("disabled")
		}

	}

	return (
		<div className='userProfile'>
			<div className="profilePage__header">
				<h2>Профиль пользователя</h2>
				<MyButton onClick={edit}>
					Редактировать
				</MyButton>
			</div>
			<UserProfileForm status={status} userProfile={userProfile} />
		</div>
	)
}
