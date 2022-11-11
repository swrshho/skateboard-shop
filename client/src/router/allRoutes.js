// landing page
import HomePage from './../pages/home'
import Auth from '../pages/auth'

const userRoutes = [
	{ path: '/home', component: <HomePage /> },
	{ path: '/auth', component: <Auth /> },
]

export { userRoutes }
