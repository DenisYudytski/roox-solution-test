import './MyButton.scss'

export const MyButton = ({ children, ...props }) => {
	return (
		<button className='myButton' {...props}>
			{children}
		</button>
	)
}
