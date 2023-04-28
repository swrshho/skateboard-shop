import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import decode from 'jwt-decode'
import { googleLogout } from '@react-oauth/google'

// assets and content
import Logo from '../../assets/logo/Logo'
import NavBtn from '../../assets/nav-btns/NavBtn'
import { NavbarData } from './NavbarData'
import Seperator from '../../assets/line-seperator'
import CTA from '../cta/'

// icons
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LogoutIcon from '@mui/icons-material/Logout'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import PersonIcon from '@mui/icons-material/Person'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

// actions
import { authLogout } from '../../features/auth/authSlice'
import { removeFromCart } from '../../features/cart/cartSlice'

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false)
	const [dropdown, setDropdown] = useState(false)
	const [cartMenu, setCartMenu] = useState(false)
	const showSidebar = () => setSidebar(!sidebar)
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const cartItems = useSelector((state) => state.cart.items)

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

	const nameShortener = (name) => {
		if (name.length > 10) {
			return `${name.slice(0, 12)}...`
		}
		return name
	}

	const deleteCartItemHandler = (itemId) => {
		dispatch(removeFromCart(itemId))
	}

	const calculateTotalPrice = () => {
		let totalPrice = 0
		cartItems.map((item) => (totalPrice += item.price))
		return totalPrice.toFixed(2)
	}

	return (
		<>
			<header className='fixed z-20 flex h-16 w-full items-center justify-center bg-half-black'>
				<div className='flex w-11/12 items-center justify-between sm:container'>
					<Logo />
					<Link to='#' className='lg:hidden' onClick={showSidebar}>
						<MenuIcon fontSize='large' className='text-light-bluish-gray' />
					</Link>

					<nav
						className={`nav absolute bottom-0
							 top-0 h-screen w-screen bg-black opacity-100 transition-all delay-200 ${
									sidebar ? 'left-0' : 'left-full'
								} lg:static lg:h-fit lg:w-2/3`}>
						<div
							className='mt-5 flex h-full w-11/12 flex-col items-end
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

							<div className='nav-buttons flex justify-end lg:mr-0'>
								<div className='relative'>
									<button
										type='button'
										onClick={() => setCartMenu(!cartMenu)}
										className={`${user ? 'mr-44' : ''}`}>
										<ShoppingCartIcon
											fontSize='large'
											className='mr-5 text-light-bluish-gray'
										/>
										<div className='absolute top-0 flex items-center justify-center rounded-full bg-orange-600 px-1 text-sm text-white'>
											{cartItems.length}
										</div>
									</button>

									{cartMenu ? (
										<div
											className={`${
												user ? 'right-48' : 'right-4'
											} cart-menu absolute top-12 flex w-56 flex-col gap-2 p-4 text-center`}>
											{cartItems.map((product, idx) => (
												<div
													className='flex justify-between rounded-md border-2 border-neutral-300 p-1 font-poppins'
													key={idx}>
													<img
														className='h-20'
														src={`data:image/png;base64, ${product.images[0]}`}
														alt={product.name}
													/>
													<p className='ml-2 text-left text-lg font-bold capitalize text-dark-blue'>
														{product.name}
													</p>
													<div className='flex flex-col items-end justify-between'>
														<CloseIcon
															className='cursor-pointer'
															onClick={() => deleteCartItemHandler(product._id)}
														/>
														<p className='font-semibold'>${product.price}</p>
													</div>
												</div>
											))}
											{cartItems.length === 0 ? (
												<p className='text-zinc-500'>Your cart is empty.</p>
											) : null}
											<p className='flex justify-between font-semibold'>
												Total: {`$${calculateTotalPrice()}`}
											</p>
											<CTA
												type='primary'
												path={cartItems.length === 0 ? '/shop' : '/home'}
												rounded>
												{cartItems.length === 0
													? 'shop now'
													: 'finich purchase'}
											</CTA>
										</div>
									) : null}
								</div>

								{user ? (
									<NavBtn
										onClick={() => setDropdown(!dropdown)}
										isOpen={dropdown}>
										<div>
											{dropdown ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
											<span className='overflow-hidden text-ellipsis whitespace-nowrap'>
												{nameShortener(user.name)}
											</span>
										</div>

										<div
											className={`${
												dropdown ? 'block' : 'hidden'
											} mt-2 flex flex-col items-start gap-1 text-base transition-all`}>
											<Seperator />
											<Link
												className='flex w-full justify-between rounded pl-1 text-left transition-all hover:bg-white'
												to={`/dashboard/${user._id}`}>
												Dashboard
												<KeyboardArrowRightIcon />
											</Link>
											<Seperator />
											<button
												className='flex w-full justify-between rounded pl-1 text-left transition-all hover:bg-white'
												onClick={logout}>
												Logout
												<LogoutIcon />
											</button>
										</div>
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
