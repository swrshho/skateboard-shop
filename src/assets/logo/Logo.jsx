import { Link } from 'react-router-dom'
import logo from './../images/logo.png'

const Logo = () => {
	return (
		<Link to='/' className='z-10 flex items-center'>
			<img
				className='w-11 h-9 sm:w-16 sm:h-14'
				src={logo}
				alt='Rolling Wheels'
			/>
			<h1 className='fotnt-poppins font-bold text-xl sm:text-2xl text-white'>
				ROLLING WHEELS
			</h1>
		</Link>
	)
}

export default Logo
