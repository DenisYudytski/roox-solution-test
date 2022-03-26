import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchUserProfile } from "../../asyncActions/userProfile"
import { UserProfile } from "../../components/UserProfile/UserProfile"
import './UserProfilePage.scss'

export const UserProfilePage = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const userProfile = useSelector(state => state.userProfile.userProfile)
	useEffect(() => {
		dispatch(fetchUserProfile(id))
	}, [id, dispatch])

	return (
		<div className="profilePage">
			<UserProfile userProfile={userProfile} />
		</div>

	)
}
