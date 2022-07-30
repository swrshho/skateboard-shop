import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'

const SocialBTN = ({ path, icon }) => {
	return (
		<div className='bg-white p-2 rounded-full'>
			<IconContext.Provider value={{ color: 'black', size: '1em' }}>
				<Link to={path}>{icon}</Link>
			</IconContext.Provider>
		</div>
	)
}

export default SocialBTN
