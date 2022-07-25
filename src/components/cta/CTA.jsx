import { Link } from 'react-router-dom'

const CTA = ({ children, type = 'primary' || 'secondry', rounded, path }) => {
	const roundCheck = () => {
		if (rounded) {
			return 'rounded-md'
		}
	}

	const typeChecker = () => {
		switch (type) {
			case 'primary':
				return 'bg-red text-light-bluish-gray  hover:bg-light-bluish-gray hover:text-black'

			case 'secondry':
				return 'bg-light-bluish-gray text-black hover:bg-red hover:text-light-bluish-gray'

			default:
				return 'bg-red text-light-bluish-gray  hover:bg-light-bluish-gray hover:text-black'
		}
	}

	return (
		<Link
			to={path}
			className={`px-1.5 py-2 font-poppins font-medium uppercase text-xl border-2 border-red transition all
      ${roundCheck()}
      ${typeChecker()}`}>
			{children}
		</Link>
	)
}

export default CTA
