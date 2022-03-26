import React from 'react'
import { Link } from 'react-router-dom'
import './UserCard.scss'

export const UserCard = ({ user }) => {
	return (
		<div className='userCard'>
			<div className='userCard__item'><span>ФИО:</span>{user.name}</div>
			<div className='userCard__item'><span>Город:</span>{user.address.city}</div>
			<div className='userCard__item'><span>Компания:</span>{user.company.name}</div>
			<div className='info'><Link to={`/${user.id}`}>Подробнее</Link></div>

		</div>
	)
}
