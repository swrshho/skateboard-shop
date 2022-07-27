import CTA from '../cta/CTA'

const ProductCard = ({ name, price, image }) => {
	return (
		<div
			className={`flex flex-col justify-end items-center h-40 max-h-420px max-w-xs w-5/6 md:w-64 md:h-full
       bg-light-bluish-gray rounded-xLarge last:rounded-b-none md:rounded-b-none`}>
			<div className='flex justify-center items-center h-16 md:h-full'>
				<img
					className='rotate-90 w-2/5 sm:w-5/12 md:rotate-0 md:w-10/12'
					src={image}
					alt={name}
				/>
			</div>
			<h3 className='font-poppins font-medium text-base text-black uppercase md:text-lg'>
				{name}
			</h3>
			<span className='text-dark-blue font-poppins font-medium text-base md:text-lg'>
				${price}
			</span>
			<CTA className='text-sm py-1 md:text-base' type='primary' path='/shop'>
				add to cart
			</CTA>
		</div>
	)
}

export default ProductCard
