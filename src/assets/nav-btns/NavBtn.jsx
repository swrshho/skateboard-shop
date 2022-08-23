import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { useState } from 'react'

const NavBtn = ({ path, title, icon, color, hasHover }) => {
	const [hover, setHover] = useState(false)
	return (
		<Link
			onMouseEnter={hasHover ? () => setHover(true) : null}
			onMouseLeave={hasHover ? () => setHover(false) : null}
			className={`font-regular flex items-center justify-between rounded-md bg-light-bluish-gray
								 px-2 py-1 text-xl uppercase text-black transition-all 
                 ${
										hasHover
											? 'hover:bg-black hover:text-light-bluish-gray'
											: null
									}`}
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
