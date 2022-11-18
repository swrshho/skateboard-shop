import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import { googleLogout } from '@react-oauth/google'

// assets and content
import Logo from '../../assets/logo/Logo'
import NavBtn from '../../assets/nav-btns/NavBtn'
import { NavbarData } from './NavbarData'

// icons
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'

// actions
import { authLogout } from '../../features/auth/authSlice'

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false)
	const showSidebar = () => setSidebar(!sidebar)
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

	const logout = () => {
		dispatch(authLogout())
		setUser(null)
		googleLogout()
		navigate('/')
	}

	useEffect(() => {
		const token = user?.token

		if (token) {
			const decodedData = decode(token)
			if (decodedData.exp * 1000 < new Date().getTime()) {
				logout()
			}
		}

		setUser(JSON.parse(localStorage.getItem('user')))
	}, [location])

	return (
		<>
			<header className='fixed z-10 flex h-16 w-full items-center justify-center bg-half-black'>
				<div className='flex w-11/12 items-center justify-between sm:container'>
					<Logo />
					<Link to='#' className='lg:hidden' onClick={showSidebar}>
						<MenuIcon fontSize='large' className='text-light-bluish-gray' />
					</Link>

					<nav
						className={`nav absolute
							 bottom-0 top-0 h-screen w-screen bg-black opacity-100 transition-all delay-200 ${
									sidebar ? 'left-0' : 'left-full'
								} lg:static lg:h-fit lg:w-2/3`}>
						<div
							className='mt-5 mr-10 flex h-full flex-col items-end
							lg:mr-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between'>
							<Link to='#' className='lg:hidden' onClick={showSidebar}>
								<CloseIcon
									fontSize='large'
									className='text-light-bluish-gray'
								/>
							</Link>

							<div className='flex h-4/6 flex-col justify-center lg:mr-7 lg:h-fit lg:w-2/3'>
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

							<div className='nav-buttons flex w-1/2 justify-end lg:mr-0'>
								<Link to='#'>
									<ShoppingCartIcon
										fontSize='large'
										className='mr-5 text-light-bluish-gray'
									/>
								</Link>

								{user ? (
									<NavBtn onClick={logout}>
										<LogoutIcon />
										{user.name}
									</NavBtn>
								) : (
									<NavBtn link path='/auth'>
										<PersonIcon />
										Sign In
									</NavBtn>
								)}
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Navbar
