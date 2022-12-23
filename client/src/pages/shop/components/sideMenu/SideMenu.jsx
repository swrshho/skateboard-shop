import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SortIcon from '@mui/icons-material/Sort'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { useState } from 'react'

const SideMenu = ({
	data,
	sortMode,
	setSortMode,
	setCategory,
	setBrand,
	setInStock,
}) => {
	const [showMenu, setShowMenu] = useState()

	const sortMenuItems = [
		'most viewed',
		'top rated',
		'cheapest',
		'most expensive',
		'best seller',
	]

	const handleCategoryClick = (e) => {
		setCategory(e.target.value)
	}

	const handleBrandClick = (e) => {
		setBrand(e.target.value)
	}

	const checkBoxHandler = (e) => {
		setInStock(e.target.checked)
	}

	return (
		<div
			className={`
			absolute z-10 mb-6 flex w-11/12 max-w-xs items-start justify-center rounded-3xl
			bg-light-bluish-gray py-3 px-4 font-poppins shadow-lg transition-all ${
				showMenu ? 'max-h-fit' : 'max-h-12'
			}
				md:static md:mb-0 md:max-h-496px md:max-w-261px`}>
			<div
				className={`flex h-fit w-full items-center text-dark-blue transition-all
				${showMenu ? 'mt-4 flex-col justify-center' : 'flex-row justify-around'}
				md:h-full md:flex-col md:justify-around`}>
				<div
					className={`cursor-pointer transition-all ${
						showMenu ? 'w-full' : ''
					} md:w-full`}>
					<div
						className={`flex justify-center transition-all`}
						onClick={() => setShowMenu(!showMenu)}>
						<FilterAltIcon />
						<span>Filter</span>
					</div>

					<div
						className={`${
							showMenu ? 'visible' : 'hidden'
						} -bottom-10 mt-4 flex w-full flex-col md:visible md:block`}>
						<span className='h-px w-full bg-half-black md:block'></span>
						<div className='relative flex w-full items-center justify-end py-2'>
							<select
								id='category-select'
								className='absolute w-full cursor-pointer appearance-none bg-transparent font-poppins'>
								<option value='' disabled selected>
									Category:
								</option>
								{data.category.map((item, idx) => (
									<option
										onClick={handleCategoryClick}
										key={idx}
										value={`${item}`}>
										{item}
									</option>
								))}
							</select>
							<KeyboardArrowDownRoundedIcon
								className='self-end'
								fontSize='large'
							/>
						</div>
						<span className='h-px w-full bg-half-black md:block'></span>

						<div className='relative flex w-full items-center justify-end py-2'>
							<select
								id='category-select'
								className='absolute w-full cursor-pointer appearance-none bg-transparent font-poppins'>
								<option value='' disabled selected>
									Brand:
								</option>
								{data.brand.map((item, idx) => (
									<option
										onClick={handleBrandClick}
										key={idx}
										value={`${item}`}>
										{item}
									</option>
								))}
							</select>
							<KeyboardArrowDownRoundedIcon
								className='self-end'
								fontSize='large'
							/>
						</div>
						<span className='h-px w-full bg-half-black md:block'></span>

						<div className='mb-8 flex w-full cursor-auto items-center justify-between py-4 pr-3'>
							<label htmlFor='stock'>In Stock</label>
							<input
								type='checkbox'
								name='stock'
								id='stock'
								onClick={checkBoxHandler}
								className='checked:bg-dark-blue hover:cursor-pointer'
							/>
						</div>
					</div>
				</div>

				<div
					className={`cursor-pointer transition-all ${
						showMenu ? 'w-full' : ''
					} md:w-full`}>
					<div
						className={`flex justify-center transition-all`}
						onClick={() => setShowMenu(!showMenu)}>
						<SortIcon />
						<span>Sort</span>
					</div>

					<div
						className={`${
							showMenu ? 'visible' : 'hidden'
						} -bottom-10 flex w-full flex-col md:visible md:block`}>
						<div className='flex flex-col items-center gap-3'>
							{sortMenuItems.map((item, idx) => (
								<a
									key={idx}
									href='#'
									onClick={() => setSortMode(item)}
									className={`${sortMode === item ? 'text-red' : ''}
							font-medium capitalize first:mt-4 last:mb-5`}>
									{item}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideMenu
