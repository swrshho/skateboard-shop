import { Link } from 'react-router-dom'
import CTA from '../../components/cta/CTA'
import SocialLinks from '../socialLinks/SocialLinks'
import { footerNavData } from './data'
import Logo from '../../assets/logo/Logo'

const Footer = () => {
	return (
		<div className='flex flex-col items-center justify-between bg-velvet-red h-screen p-10 pb-2 font-poppins sm:h-512px'>
			<h1 className='font-anton uppercase text-white text-6xl text-center min-w-450px max-w-512px'>
				get the latest news about us
			</h1>

			<div className='w-4/5 max-w-330px flex flex-col items-center justify-between sm:max-w-512px'>
				<form className='sm:flex'>
					<input
						className='rounded-md p-2 text-black w-full h-12 sm:rounded-r-none'
						type='email'
						placeholder='Your E-mail Address...'
					/>
					<CTA
						className='hidden sm:inline-block rounded-l-none'
						type='primary'
						path='./shop'
						rounded>
						submit
					</CTA>
				</form>

				<CTA
					className='w-full text-center mt-2 sm:hidden'
					type='primary'
					path='./shop'
					rounded>
					submit
				</CTA>
			</div>

			<div className='sm:min-w-92 sm:max-w-sm'>
				<ul
					className='h-full w-full font-poppins text-white capitalize text-xl
						flex flex-col items-center justify-around
						sm:flex-row'>
					{footerNavData.map((link, idx) => (
						<li className='mb-3 last:mb-0 sm:m-0' key={idx}>
							<Link to={link.path}>{link.title}</Link>
						</li>
					))}
				</ul>
			</div>

			<SocialLinks className='sm:hidden' />

			<div className='w-full flex flex-col items-center justify-between'>
				<span className='bg-white w-full h-px inline-block mb-4' />
				<div className='w-11/12 flex flex-col items-center justify-between sm:flex-row'>
					<Logo />
					<p className='text-white font-poppins capitalize text-center'>
						© all rights reserved
					</p>
					<SocialLinks className='hidden sm:flex' />
				</div>
			</div>
		</div>
	)
}

export default Footer
