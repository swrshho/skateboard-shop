import { useState } from 'react'
import { Link } from 'react-router-dom'

// assets and content
import Logo from '../../assets/logo/Logo'
import NavBtn from '../../assets/nav-btns/NavBtn'
import { NavbarData } from './NavbarData'

// icons
import { FiMenu, FiX } from 'react-icons/fi'
import { BsFillCartFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false)

	const showSidebar = () => setSidebar(!sidebar)
	return (
		<>
			<IconContext.Provider value={{ color: 'white', size: '2em' }}>
				<div className='flex justify-center items-center h-16 bg-half-black'>
					<div className='w-11/12 sm:container flex justify-between items-center'>
						<Logo />
						<Link to='#' className='lg:hidden' onClick={showSidebar}>
							<FiMenu />
						</Link>

						<nav
							className={`absolute
							 w-full h-full bg-black opacity-100 transition-all delay-200 bottom-0 ${
									sidebar ? 'left-0' : 'left-full'
								}`}>
							<div className='mt-5 mr-5 flex flex-col items-end h-full'>
								<Link to='#' onClick={showSidebar}>
									<FiX />
								</Link>

								<div className='h-4/6 flex flex-col justify-center mr-7'>
									<ul className='nav-links h-3/6 flex flex-col justify-around items-end font-poppins text-xl uppercase text-right text-white'>
										{NavbarData.map((link, idx) => {
											return (
												<li
													className='w-fit border-b-0 hover:border-b transition-all'
													key={idx}>
													<Link to={link.path}>{link.title}</Link>
												</li>
											)
										})}
									</ul>
								</div>

								<div className='nav-buttons flex w-1/2 justify-between mr-7'>
									<Link to='#'>
										<BsFillCartFill />
									</Link>

									<NavBtn
										path='#'
										title='sign in'
										icon={<FaUserAlt className='mr-3' />}
										color='black'
									/>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</IconContext.Provider>
		</>
	)
}

export default Navbar
