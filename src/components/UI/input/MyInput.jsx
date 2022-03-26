import './MyInput.scss'

export const MyInput = ({ name, className, ...props }) => {
	return (
		<label className="input-wrapper"><span>{name}</span>
			<input className={`input ${className}`} name={name} {...props} />
		</label>
	)
}
