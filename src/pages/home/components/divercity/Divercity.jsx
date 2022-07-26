import RedText from '../../../../components/redText/RedText'
import CTA from '../../../../components/cta/CTA'
import { boardStyles } from './data'

const Divercity = () => {
	return (
		<div className='bg-light-bluish-gray p-4 h-screen md:h-650px md:p-12'>
			<div className='h-full w-full flex flex-col items-center justify-between lg:items-start lg:relative'>
				<h1 className='font-anton text-black uppercase text-6xl min-w-274px max-w-512px self-start'>
					<RedText>enjoy</RedText> the divercity of <RedText>styles</RedText>
				</h1>

				<div
					className='flex rotate-90 sm:rotate-0 sm:w-full sm:justify-around sm:max-w-512px
        lg:absolute lg:right-0 lg:top-1/4 lg:justify-between lg:w-5/12 xl:w-3/5 xl:max-w-full'>
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

				<p className='font-poppins text-base min-w-420px max-w-512px md:text-xl'>
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
