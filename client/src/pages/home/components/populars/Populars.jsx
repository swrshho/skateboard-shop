import { useSelector } from 'react-redux'

import RedTextShadow from '../../../../components/redTextShadow/RedTextShadow'
import ProductCard from '../../../../components/productCard/ProductCard'

const Populars = () => {
	const { products } = useSelector((state) => state.products)
	const popularProducts = products
		.filter((product) => product.rating > 4.5)
		.slice(0, 3)
	return (
		<div className='flex flex-col items-center bg-dark-blue md:max-h-656px'>
			<h1
				className='mt-7 w-64 text-center font-anton text-5xl
				uppercase text-light-bluish-gray md:mt-10 md:w-80 md:text-6xl'>
				our popular <RedTextShadow>products</RedTextShadow>
			</h1>
			<div
				className='mt-6 flex h-full w-full flex-wrap items-end
				justify-center gap-x-1.5 md:max-w-4xl md:flex-row x-md:justify-between'>
				{popularProducts.map((product) => (
					<ProductCard
						name={product.name}
						price={product.price}
						image={`data:image/png;base64, ${product.image}`}
						key={product._id}
					/>
				))}
			</div>
		</div>
	)
}

export default Populars
