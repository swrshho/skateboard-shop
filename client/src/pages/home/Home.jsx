import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../features/products/productsSlice'

import Layout from './../../layout'
import Hero from './components/hero/Hero'
import Divercity from './components/divercity/Divercity'
import Populars from './components/populars/Populars'
import Bullets from './components/bullets/Bullets'

const HomePage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])

	return (
		<Layout>
			<Hero />
			<Divercity />
			<Populars />
			<Bullets />
		</Layout>
	)
}

export default HomePage
