import RedText from '../../../../components/redText/RedText'
import CTA from '../../../../components/cta/CTA'
import { boardStyles } from './data'

const Divercity = () => {
	return (
		<div className='bg-light-bluish-gray p-4 md:h-650px md:p-12'>
			<div className='flex h-full w-full flex-col items-center justify-between lg:relative lg:items-start'>
				<h1 className='min-w-274px max-w-512px self-start font-anton text-6xl uppercase text-black'>
					<RedText>enjoy</RedText> the divercity of <RedText>styles</RedText>
				</h1>

				<div
					className='flex rotate-90 sm:w-full sm:max-w-512px sm:rotate-0 sm:justify-around
        lg:absolute lg:right-0 lg:top-1/4 lg:w-5/12 lg:justify-between xl:w-3/5 xl:max-w-full'>
					{boardStyles.map((item, idx) =>
						item.name === 'popsicle' ? (
							<img
								className='h-56 lg:h-80 xl:h-96'
								src={item.image}
								alt={item.name}
								key={idx}
							/>
						) : (
							<>
								<img
									className='h-56 lg:h-80 xl:h-96'
									src={item.image}
									alt={item.name}
									key={idx}
								/>
								<span className='h-full w-px bg-black lg:h-80 xl:h-96' />
							</>
						)
					)}
				</div>

				<p className='mb-2 min-w-320px max-w-512px font-poppins text-base md:text-xl'>
					Rolling wheels offers a variaty of skakteboard styles for you to
					choose from.
					<br /> We are proud to say that we have been able to provide
					skateboarding community with high quality products in the past 10
					years.
				</p>

				<CTA className='block md:hidden' type='secondry' rounded path='/shop'>
					choose now
				</CTA>

				<CTA className='hidden md:block' type='secondry' rounded path='/shop'>
					choose from various styles
				</CTA>
			</div>
		</div>
	)
}

export default Divercity
