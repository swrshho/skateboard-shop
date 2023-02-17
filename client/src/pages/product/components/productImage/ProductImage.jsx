import { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const ProductImage = ({ product, isLoading }) => {
	const imagesArray = product.images
	const [currentIndex, setCurrentIndex] = useState(0)

	const gotoPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? imagesArray.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const gotoNext = () => {
		const isLastSlide = currentIndex === imagesArray.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const gotoSlide = (slideIndex) => {
		setCurrentIndex(slideIndex)
	}

	return (
		<div className='relative h-full min-w-250px max-w-xs rounded-xLarge bg-light-bluish-gray p-4'>
			<ArrowBackIosIcon
				className='absolute top-1/2 left-5 cursor-pointer text-gray'
				fontSize='large'
				onClick={gotoPrevious}
			/>
			<ArrowForwardIosIcon
				className='absolute top-1/2 right-5 cursor-pointer text-gray'
				fontSize='large'
				onClick={gotoNext}
			/>
			<div className='h- mb-8 flex items-center justify-center'>
				<img
					className='h-60'
					src={`data:image/png;base64, ${imagesArray[currentIndex]}`}
					alt={product.name}
				/>
			</div>
			<div className='flex items-center justify-center p-4'>
				<div className='flex w-5/6 items-center justify-around'>
					{imagesArray.map((image, idx) => (
						<div
							className={`flex h-10 w-10 cursor-pointer justify-center overflow-hidden rounded-full border-2 p-0
							${currentIndex === idx ? 'border-dark-blue' : 'border-gray'}`}
							key={idx}
							onClick={() => gotoSlide(idx)}>
							<img src={`data:image/png;base64, ${image}`} alt={product.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductImage
