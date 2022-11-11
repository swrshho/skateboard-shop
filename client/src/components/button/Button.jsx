const Button = ({ children, type, rounded, className, onClick, color }) => {
	const roundCheck = () => {
		if (rounded) {
			return 'rounded-md'
		}
	}

	const colorChecker = () => {
		switch (color) {
			case 'primary':
				return 'bg-red text-light-bluish-gray  hover:bg-light-bluish-gray hover:text-black'

			case 'secondry':
				return 'bg-light-bluish-gray text-black hover:bg-red hover:text-light-bluish-gray'

			default:
				return 'bg-red text-light-bluish-gray  hover:bg-light-bluish-gray hover:text-black'
		}
	}

	return (
		<button
			type={type}
			className={`all border-2 border-red px-1.5 py-2 font-poppins text-xl font-medium uppercase transition
      ${roundCheck()}
      ${colorChecker()}
			${className}`}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
