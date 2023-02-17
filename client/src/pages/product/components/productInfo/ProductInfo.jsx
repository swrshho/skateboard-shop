import RatingStar from '../../../../components/ratingStar'
import CTA from '../../../../components/cta'

const ProductInfo = ({ product }) => {
	return (
		<div className='mt-12 w-full min-w-250px max-w-2xl space-y-4 rounded-xLarge bg-light-bluish-gray p-4 sm:flex sm:justify-between sm:p-8 lg:mt-0'>
			{/* title and info */}
			<div className='flex flex-col items-center space-y-6 sm:items-start'>
				{/* title and rating */}
				<div className='info'>
					<h1 className='h1-clamp mb-2 text-4xl font-bold capitalize'>
						{product.name}
					</h1>
					<div className=' flex items-center justify-between text-sm font-medium'>
						<RatingStar rating={product.rating} />
						<span>{product.comments.length} Comments</span>
						<span>
							{product.reviews.length}
							{product.reviews.length > 1 ? ' Reviews' : ' Review'}
						</span>
					</div>
				</div>

				{/* in stock */}
				<div className='font-semibold'>
					<p>Currently {product.countInStock > 0 ? null : 'Not'} In Stock</p>
					<p className='font-medium text-darkGray'>Shipping from 1 day</p>
				</div>

				{/* details */}
				<div className='flex flex-col items-start'>
					<h3 className='mb-3 text-lg font-semibold'>Details:</h3>
					<span className='text-darkGray'>
						Deck Type:{' '}
						<span className='capitalize text-dark-blue'>
							{product.category}
						</span>
					</span>
					<span className='text-darkGray'>
						Deck Size:{' '}
						<span className='capitalize text-dark-blue'>{product.size}</span>
					</span>
					<span className='text-darkGray'>
						Suitable For:{' '}
						<span className='capitalize text-dark-blue'>
							{product.suitableFor}
						</span>
					</span>
					<span className='text-darkGray'>
						Maximum User Weight:{' '}
						<span className='capitalize text-dark-blue'>
							{product.maxWeight}kg
						</span>
					</span>
					<span className='text-darkGray'>
						Material:{' '}
						<span className='capitalize text-dark-blue'>
							{product.material}
						</span>
					</span>
				</div>
			</div>

			{/* add to cart and price */}
			<div className='shipping flex flex-col items-center space-y-6 sm:self-center'>
				<div className='w-56'>
					<div className='flex w-48 justify-between font-medium'>
						<label htmlFor='wheels'>Install Wheels</label>
						<input
							type='checkbox'
							name='wheels'
							id='wheels'
							className='checked:bg-dark-blue hover:cursor-pointer'
						/>
					</div>
					<div className='flex w-48 justify-between font-medium'>
						<label htmlFor='wheels'>Apply Grit Tape</label>
						<input
							type='checkbox'
							name='wheels'
							id='wheels'
							className='checked:bg-dark-blue hover:cursor-pointer'
						/>
					</div>
				</div>

				<div className='w-56'>
					<p className='font-semibold'>Delivery Options:</p>
					<div className='w-56 text-darkGray'>
						<div className='flex w-48 justify-between font-medium'>
							<label htmlFor='wheels'>Express Delivery</label>
							<input
								type='checkbox'
								name='wheels'
								id='wheels'
								className='checked:bg-dark-blue hover:cursor-pointer'
							/>
						</div>
						<div className='flex w-48 justify-between font-medium'>
							<label htmlFor='wheels'>Gift Wrapped</label>
							<input
								type='checkbox'
								name='wheels'
								id='wheels'
								className='checked:bg-dark-blue hover:cursor-pointer'
							/>
						</div>
					</div>
				</div>

				{/* floating CTA */}
				<div
					className='CTA-shadow  fixed left-0 bottom-0 z-20 flex h-28 w-full
				flex-col justify-center rounded-xLarge rounded-b-none
				bg-light-bluish-gray sm:relative sm:z-0 sm:shadow-none'>
					<div className='price mb-2 flex justify-center'>
						<span className='text-3xl font-bold text-dark-blue'>
							$ {product.price}
							<span className='text-base text-gray'> + tax & delivery</span>
						</span>
					</div>
					<CTA
						type='primary'
						path='#'
						className='flex w-3/4 justify-center self-center'>
						Add To Cart
					</CTA>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
