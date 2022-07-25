import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { useState } from 'react'

const NavBtn = ({ path, title, icon, color }) => {
	const [hover, setHover] = useState(false)
	return (
		<Link
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className='uppercase bg-light-bluish-gray text-black text-xl font-regular transition-all
								 rounded-md px-2 py-1 flex justify-between items-center hover:bg-black hover:text-light-bluish-gray'
			to={path}>
			<IconContext.Provider
				value={{ color: hover ? 'white' : color, size: '1em' }}>
				{icon}
				{title}
			</IconContext.Provider>
		</Link>
	)
}

export default NavBtn
