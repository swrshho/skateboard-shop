import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'

import Button from '../button'

const ProductCard = ({ product }) => {
	const { name, price } = product
	const image = `data:image/png;base64, ${product.images[0]}`
	const dispatch = useDispatch()

	const addToCartHandler = () => {
		dispatch(addToCart(product))
	}

	return (
		<div
			className={`mb-6 flex h-40 max-h-420px w-5/6 max-w-xs flex-col items-center
        justify-end rounded-xLarge bg-light-bluish-gray
        last:mb-0 last:rounded-b-none x-md:mb-0 x-md:h-full x-md:w-64 x-md:rounded-b-none`}>
			<div className='flex h-16 items-center justify-center x-md:h-full'>
				<img
					className='w-2/5 rotate-90 sm:w-5/12 x-md:w-10/12 x-md:rotate-0'
					src={image}
					alt={name}
				/>
			</div>
			<h3 className='font-poppins text-base font-medium uppercase text-black md:text-lg'>
				{name}
			</h3>
			<span className='font-poppins text-base font-medium text-dark-blue md:text-lg'>
				${price}
			</span>
			<Button
				className='py-1 text-sm md:text-base'
				type='button'
				color='primary'
				onClick={addToCartHandler}>
				add to cart
			</Button>
		</div>
	)
}

export default ProductCard
