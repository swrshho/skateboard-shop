import StarRoundedIcon from '@mui/icons-material/StarRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { useState } from 'react'
import FavoriteRounded from '@mui/icons-material/FavoriteRounded'

const ProductTile = ({ product }) => {
	const [liked, setLiked] = useState(false)

	return (
		<div className='mb-8 flex h-64 w-full max-w-330px flex-col rounded-xLarge bg-light-bluish-gray p-6 font-poppins last:mb-0 md:mb-0 x-sm:h-auto x-sm:max-h-72 x-sm:w-auto x-sm:min-w-320px'>
			<div className='flex justify-between'>
				<div className='flex items-center'>
					<StarRoundedIcon className='text-gold' />
					<span className=' text-sm font-medium text-dark-blue'>
						{product.rating}
					</span>
				</div>
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

			<div className='flex w-2/6 -translate-y-8 rotate-90 cursor-pointer items-center justify-center self-center'>
				<img
					className='max-h-52'
					src={`data:image/png;base64, ${product.image}`}
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
			</div>
		</div>
	)
}

export default ProductTile
