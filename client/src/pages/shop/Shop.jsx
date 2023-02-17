import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProducts } from '../../features/products/productsSlice'

import Layout from '../../layout/Layout'
import SideMenu from './components/sideMenu'
import ProductTile from './components/productTile'
import Spinner from '../../components/spinner'

const Shop = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])

	const { products } = useSelector((state) => state.products)
	const { isLoading } = useSelector((state) => state.products)

	const sideMenuData = {
		// returns unique categories and brands of products
		category: [...new Set(products.map((product) => product.category))],
		brand: [...new Set(products.map((product) => product.brand))],
	}

	const [sortMode, setSortMode] = useState('most viewed')
	const [category, setCategory] = useState('')
	const [brand, setBrand] = useState('')
	const [inStock, setInStock] = useState(false)

	const [displayedProducts, setDisplayedProducts] = useState([...products])
	useEffect(() => setDisplayedProducts([...products]), [products])

	const sortProducts = () => {
		// .slice() creates a copy of original array because it's immutable
		let sortedProducts = products.slice()
		switch (sortMode) {
			case 'top rated':
				return sortedProducts.sort((a, b) => b.rating - a.rating)
			case 'cheapest':
				return sortedProducts.sort((a, b) => a.price - b.price)
			case 'most expensive':
				return sortedProducts.sort((a, b) => b.price - a.price)

			// case 'best seller'

			default:
				return sortedProducts
		}
	}

	const filterProducts = () => {
		let filteredProducts = products
		if (category) {
			filteredProducts = filteredProducts.filter(
				(product) => product.category === category
			)
		}
		if (brand) {
			filteredProducts = filteredProducts.filter(
				(product) => product.brand === brand
			)
		}
		if (inStock) {
			filteredProducts = filteredProducts.filter(
				(product) => product.countInStock > 0
			)
		}
		return filteredProducts
	}

	useEffect(() => {
		setDisplayedProducts(sortProducts())
	}, [sortMode])

	useEffect(() => {
		setDisplayedProducts(filterProducts())
	}, [category, brand, inStock])

	return (
		<>
			<Layout>
				<div className={`bg-dark-blue pt-20`}>
					<div
						className={`${
							isLoading ? 'blur-sm' : ''
						} flex justify-center gap-4 p-4 md:justify-between`}>
						<SideMenu
							data={sideMenuData}
							sortMode={sortMode}
							setSortMode={setSortMode}
							setCategory={setCategory}
							setBrand={setBrand}
							setInStock={setInStock}
						/>

						<div
							className={`mt-20 flex flex-wrap justify-center gap-7 md:mt-0 md:justify-evenly`}>
							{displayedProducts.map((product) => (
								<ProductTile product={product} key={product._id} />
							))}
						</div>
					</div>
				</div>
				{isLoading ? (
					<div className='absolute top-0 flex h-screen w-full items-center justify-center'>
						<Spinner color='secondry' />
					</div>
				) : null}
			</Layout>
		</>
	)
}

export default Shop
