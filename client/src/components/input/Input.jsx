const Input = ({ type, placeHolder, className }) => {
	return (
		<input
			type={type}
			placeholder={placeHolder}
			className={`w-full rounded-md p-2 ${className}`}
		/>
	)
}

export default Input
