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
				<header className='fixed z-10 flex h-16 w-full items-center justify-center bg-half-black'>
					<div className='flex w-11/12 items-center justify-between sm:container'>
						<Logo />
						<Link to='#' className='lg:hidden' onClick={showSidebar}>
							<FiMenu />
						</Link>

						<nav
							className={`nav absolute
							 bottom-0 top-0 h-screen w-screen bg-black opacity-100 transition-all delay-200 ${
									sidebar ? 'left-0' : 'left-full'
								} lg:static lg:w-2/3`}>
							<div
								className='mt-5 mr-5 flex h-full flex-col items-end
							lg:mr-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between'>
								<Link to='#' className='lg:hidden' onClick={showSidebar}>
									<FiX />
								</Link>

								<div className='mr-7 flex h-4/6 flex-col justify-center lg:mr-7 lg:h-fit lg:w-2/3'>
									<menu
										className='nav-links flex h-3/6 flex-col items-end justify-around
									text-right font-poppins text-xl uppercase text-white
									lg:flex-row lg:justify-between'>
										{NavbarData.map((link, idx) => {
											return (
												<li className='underline-hover' key={idx}>
													<Link to={link.path}>{link.title}</Link>
												</li>
											)
										})}
									</menu>
								</div>

								<div className='nav-buttons mr-7 flex w-1/2 justify-end lg:mr-0'>
									<Link to='#'>
										<BsFillCartFill className='mr-5' />
									</Link>

									<NavBtn
										path='#'
										title='sign in'
										icon={<FaUserAlt className='mr-3' />}
										color='black'
										hasHover={sidebar ? false : true}
									/>
								</div>
							</div>
						</nav>
					</div>
				</header>
			</IconContext.Provider>
		</>
	)
}

export default Navbar
