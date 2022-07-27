import RedTextShadow from '../../../../components/redTextShadow/RedTextShadow'
import ProductCard from '../../../../components/productCard/ProductCard'
import { productsData } from './data'

const Populars = () => {
	return (
		<div className='flex flex-col items-center justify-between bg-dark-blue h-screen md:max-h-656px'>
			<h1
				className='font-anton text-5xl text-light-bluish-gray text-center uppercase
				w-64 mt-7 md:text-6xl md:w-80 md:mt-10'>
				our popular <RedTextShadow>products</RedTextShadow>
			</h1>
			<div
				className='flex flex-wrap items-end justify-center gap-x-1.5 md:justify-between
				w-full h-full mt-6 md:flex-row md:max-w-4xl'>
				{productsData.map((product, idx) => (
					<ProductCard
						name={product.name}
						price={product.price}
						image={product.image}
						key={idx}
					/>
				))}
			</div>
		</div>
	)
}

export default Populars
