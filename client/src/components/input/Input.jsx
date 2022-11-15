const Input = ({ type, placeHolder, onChange, name, label, className }) => {
	return (
		<input
			className={`w-full rounded-md p-2 ${className}`}
			type={type}
			placeholder={placeHolder}
			onChange={onChange}
			name={name}
			label={label}
		/>
	)
}

export default Input
