// landing page
import HomePage from './../pages/home'
import Auth from '../pages/auth'
import Shop from '../pages/shop'
import Product from '../pages/product/'

const userRoutes = [
	{ path: '/home', component: <HomePage /> },
	{ path: '/auth', component: <Auth /> },
	{ path: '/shop', component: <Shop /> },
	{ path: '/shop/:id', component: <Product /> },
]

export { userRoutes }
