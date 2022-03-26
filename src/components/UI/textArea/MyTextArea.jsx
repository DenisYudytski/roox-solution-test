import './MyTextArea.scss'

export const MyTextArea = ({ name, ...props }) => {
	return (
		<label className='area-wrapper'>
			<textarea className='area' name={name} {...props}></textarea>
		</label>
	)
}
