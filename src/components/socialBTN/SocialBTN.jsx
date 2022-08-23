import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { useState } from 'react'

const SocialBTN = ({ path, icon }) => {
	const [hover, setHover] = useState(false)

	return (
		<IconContext.Provider
			value={{ color: hover ? 'white' : 'black', size: '1em' }}>
			<Link to={path}>
				<div
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					className='rounded-full bg-white p-2 transition-all hover:bg-black'>
					{icon}
				</div>
			</Link>
		</IconContext.Provider>
	)
}

export default SocialBTN
