import { useEffect, useState } from 'react'
import { MyButton } from '../UI/button/MyButton'
import { MyInput } from '../UI/input/MyInput'
import { MyTextArea } from '../UI/textArea/MyTextArea'
import './UserProfileForm.scss'

export const UserProfileForm = ({ userProfile, status }) => {


	const [name, setName] = useState('')
	const [userName, setUserName] = useState('')
	const [eMail, setEMail] = useState('')
	const [street, setStreet] = useState('')
	const [city, setCity] = useState('')
	const [zipCode, setZipCode] = useState('')
	const [phone, setPhone] = useState('')
	const [webSite, setWebSite] = useState('')
	const [comment, setComment] = useState('')
	const [btnStatus, setBtnStatus] = useState(false)

	const [nameError, setNameError] = useState(false)
	const [userNameError, setUserNameError] = useState(false)
	const [eMailError, setEMailError] = useState(false)
	const [streetError, setStreetError] = useState(false)
	const [cityError, setCityError] = useState(false)
	const [zipCodeError, setZipCodeError] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [webSiteError, setWebSiteError] = useState(false)

	useEffect(() => {
		if (userProfile !== null) {
			setName(userProfile.name)
			setUserName(userProfile.username)
			setEMail(userProfile.email)
			setStreet(userProfile.address.street)
			setCity(userProfile.address.city)
			setZipCode(userProfile.address.zipcode)
			setPhone(userProfile.phone)
			setWebSite(userProfile.website)
		}
	}, [userProfile])


	const onChange = (e) => {
		if (e.target.value === '') {
			setBtnStatus(true)
		} else {
			setBtnStatus(false)
		}
		switch (e.target.name) {

			case ("Name"):
				setName(e.target.value)
				if (e.target.value === '') {
					setNameError(true)
				} else {
					setNameError(false)
				}
				break

			case ("User name"):
				setUserName(e.target.value)
				if (e.target.value === '') {
					setUserNameError(true)
				} else {
					setUserNameError(false)
				}
				break

			case ("E-mail"):
				setEMail(e.target.value)
				if (e.target.value === '') {
					setEMailError(true)
				} else {
					setEMailError(false)
				}
				break

			case ("Street"):
				setStreet(e.target.value)
				if (e.target.value === '') {
					setStreetError(true)
				} else {
					setStreetError(false)
				}
				break

			case ("City"):
				setCity(e.target.value)
				if (e.target.value === '') {
					setCityError(true)
				} else {
					setCityError(false)
				}
				break

			case ("Zip code"):
				setZipCode(e.target.value)
				if (e.target.value === '') {
					setZipCodeError(true)
				} else {
					setZipCodeError(false)
				}
				break

			case ("Phone"):
				setPhone(e.target.value)
				if (e.target.value === '') {
					setPhoneError(true)
				} else {
					setPhoneError(false)
				}
				break

			case ("Website"):
				setWebSite(e.target.value)
				if (e.target.value === '') {
					setWebSiteError(true)
				} else {
					setWebSiteError(false)
				}
				break

			case ("Comment"):
				setComment(e.target.value)
				break
		}

	}
	const send = () => {
		const user = {
			name: name,
			userName: userName,
			eMail: eMail,
			street: street,
			city: city,
			zipCode: zipCode,
			phone: phone,
			webSite: webSite,
			comment: comment
		}
		console.log(JSON.stringify(user));
	}
	return (
		<>
			<form className='form' onSubmit={(e) => e.preventDefault()}>
				<div className='form-item'><MyInput className={nameError ? "error" : null} onChange={onChange} value={name} disabled={status} name="Name" /></div>
				<div className='form-item'><MyInput className={userNameError ? "error" : null} onChange={onChange} value={userName} disabled={status} name="User name" /></div>
				<div className='form-item'><MyInput className={eMailError ? "error" : null} onChange={onChange} value={eMail} disabled={status} name="E-mail" /></div>
				<div className='form-item'><MyInput className={streetError ? "error" : null} onChange={onChange} value={street} disabled={status} name="Street" /></div>
				<div className='form-item'><MyInput className={cityError ? "error" : null} onChange={onChange} value={city} disabled={status} name="City" /></div>
				<div className='form-item'><MyInput className={zipCodeError ? "error" : null} onChange={onChange} value={zipCode} disabled={status} name="Zip code" /></div>
				<div className='form-item'><MyInput className={phoneError ? "error" : null} onChange={onChange} value={phone} disabled={status} name="Phone" /></div>
				<div className='form-item'><MyInput className={webSiteError ? "error" : null} onChange={onChange} value={webSite} disabled={status} name="Website" /></div>
				<MyTextArea onChange={onChange} disabled={status} value={comment} name="Comment" />
			</form>
			<div className='form-btn'>
				<MyButton onClick={send} disabled={status || btnStatus}>Отправить</MyButton>
			</div>

		</>
	)
}
