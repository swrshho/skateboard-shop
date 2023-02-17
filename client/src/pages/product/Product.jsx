import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../features/products/productsSlice'

import Layout from '../../layout/Layout'
import Spinner from '../../components/spinner'
import ProductImage from './components/productImage'
import ProductInfo from './components/productInfo/ProductInfo'

const Product = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { product, productLoading } = useSelector((state) => state.products)

	useEffect(() => {
		dispatch(getProduct(id))
	}, [id])

	return (
		<>
			<Layout>
				<div className='flex items-center justify-center bg-dark-blue'>
					<div
						className='flex w-full max-w-6xl flex-col items-center justify-between
				 			p-8 pt-24 font-poppins text-dark-blue lg:flex-row'>
						{productLoading ? (
							<div className='flex w-full items-center justify-center'>
								<Spinner color='secondry' />
							</div>
						) : (
							<>
								<ProductImage product={product} />
								<ProductInfo product={product} />
							</>
						)}
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Product
