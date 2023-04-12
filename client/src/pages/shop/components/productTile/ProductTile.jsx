import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../features/cart/cartSlice'

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import RatingStar from '../../../../components/ratingStar'
import Button from '../../../../components/button/Button'

const ProductTile = ({ product }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [liked, setLiked] = useState(false)

	const openProduct = () => {
		navigate(`/shop/${product._id}`)
	}

	const addToCartHandler = () => {
		dispatch(addToCart(product))
	}

	return (
		<div className=' mb-8 flex w-full max-w-330px flex-col rounded-xLarge bg-light-bluish-gray p-6 font-poppins last:mb-0 md:mb-0 x-sm:h-auto x-sm:max-h-80 x-sm:w-auto x-sm:min-w-320px'>
			<div className='flex justify-between'>
				<RatingStar rating={product.rating} />
				<button
					className={`flex rounded-full bg-dark-blue p-1  transition-colors hover:bg-red ${
						liked ? 'hover:bg-white' : ''
					}`}>
					<FavoriteRoundedIcon
						className={`text-light-bluish-gray ${liked ? 'text-red' : ''}`}
						onClick={() => setLiked(!liked)}
					/>
				</button>
			</div>

			<div
				onClick={openProduct}
				className='flex w-2/6 -translate-y-8 rotate-90 cursor-pointer items-center justify-center self-center'>
				<img
					className='max-h-52'
					src={`data:image/png;base64, ${product.images[0]}`}
					alt={product.name}
				/>
			</div>

			<div className='flex -translate-y-12 flex-col items-center justify-center self-center'>
				<h3 className='font-poppins text-base font-medium uppercase text-black md:text-lg'>
					{product.name}
				</h3>
				<span className='font-poppins text-base font-medium text-dark-blue md:text-lg'>
					${product.price}
				</span>
				<Button
					className='py-1 text-sm md:text-base'
					type='button'
					color='primary'
					onClick={addToCartHandler}>
					add to cart
				</Button>
			</div>
		</div>
	)
}

export default ProductTile
