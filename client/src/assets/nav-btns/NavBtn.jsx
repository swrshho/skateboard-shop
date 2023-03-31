import { Link } from 'react-router-dom'
const NavBtn = ({ path, children, link, onClick, isOpen }) => {
	return link ? (
		<Link
			className={`flex items-center justify-between rounded-md bg-light-bluish-gray px-2
									 py-1 font-poppins text-xl uppercase text-black`}
			to={path}>
			{children}
		</Link>
	) : (
		<div
			className={`dropdown-menu absolute flex w-max origin-top cursor-pointer
		flex-col rounded-md bg-light-bluish-gray px-2 py-1 text-center font-poppins text-xl capitalize text-black
		${isOpen ? 'dropdown-menu-active' : ''}`}
			onClick={onClick}>
			{children}
		</div>
	)
}

export default NavBtn
