import BulletPoint from '../../../../components/bulletPoint/BulletPoint'
import CTA from '../../../../components/cta/CTA'
import RedText from '../../../../components/redText/RedText'
import { IconContext } from 'react-icons'
import { bulletsData } from './data'

const Bullets = () => {
	return (
		<div
			className='h-screen p-10
    bg-light-bluish-gray bg-bulletsBgFaded bg-cover bg-center
    lg:bg-bulletsBg lg:bg-contain lg:bg-no-repeat lg:bg-right'>
			<div className='h-full flex flex-col items-center justify-between'>
				<h1
					className='font-anton text-black uppercase text-6xl w-80 text-center self-center
          md:w-116 lg:text-left lg:self-start'>
					get the best <RedText>skating</RedText> exprience
				</h1>

				<div className='flex flex-col justify-between md:flex-row lg:self-start'>
					<IconContext.Provider value={{ color: 'black', size: '3em' }}>
						{bulletsData.map((bullet, idx) => (
							<BulletPoint title={bullet.title} icon={bullet.icon} key={idx} />
						))}
					</IconContext.Provider>
				</div>
				<CTA type='primary' path='./shop' rounded>
					shop now
				</CTA>
			</div>
		</div>
	)
}

export default Bullets
