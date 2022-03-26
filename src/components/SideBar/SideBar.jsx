import { useDispatch } from 'react-redux'
import { sortingUsers } from '../../Redux/reducers/users'
import { MyButton } from '../UI/button/MyButton'
import './SideBar.scss'

export const SideBar = () => {
	const dispatch = useDispatch()
	return (
		<div className='sideBar'>
			<div className="sideBar__item">
				Сортировка
			</div>
			<div className="sideBar__item">
				<MyButton onClick={() => dispatch(sortingUsers("city"))}>
					по городу
				</MyButton>
			</div>
			<MyButton onClick={() => dispatch(sortingUsers("company"))}>
				по компании
			</MyButton>
		</div>
	)
}
