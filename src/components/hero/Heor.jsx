import RedTextShadow from '../redTextShadow/RedTextShadow'
import CTA from '../cta/CTA'
const Hero = () => {
	return (
		<div className='h-screen bg-heroBg bg-cover bg-center flex flex-col md:h-512px'>
			<div className='h-full w-full mt-11 flex items-center justify-center md:w-5/12'>
				<p className='h-fit font-anton text-6xl uppercase text-white max-w-261px'>
					roll along with <RedTextShadow>your</RedTextShadow> desire
				</p>
			</div>
			<div className='w-full flex justify-center items-center mb-10'>
				<CTA path='/shop' type='primary' rounded>
					discover your taste
				</CTA>
			</div>
		</div>
	)
}

export default Hero
