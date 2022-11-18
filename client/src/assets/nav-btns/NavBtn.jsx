import { Link } from 'react-router-dom'

const NavBtn = ({ path, children, link, onClick }) => {
	return link ? (
		<Link
			className={`flex items-center justify-between rounded-md bg-light-bluish-gray px-2
									 py-1 font-poppins text-xl uppercase text-black transition-all hover:bg-black hover:text-light-bluish-gray`}
			to={path}>
			{children}
		</Link>
	) : (
		<button
			className={`flex items-center justify-between rounded-md bg-light-bluish-gray px-2
		py-1 font-poppins text-xl capitalize text-black transition-all hover:bg-black hover:text-light-bluish-gray`}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default NavBtn
