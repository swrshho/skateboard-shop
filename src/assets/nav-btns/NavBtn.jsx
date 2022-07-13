import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'

const NavBtn = ({ path, title, icon, color }) => {
	return (
		<Link
			className='uppercase bg-light-bluish-gray text-black text-xl font-regular rounded-md px-2 py-1 flex justify-between items-center'
			to={path}>
			<IconContext.Provider value={{ color: color, size: '1em' }}>
				{icon}
				{title}
			</IconContext.Provider>
		</Link>
	)
}

export default NavBtn
