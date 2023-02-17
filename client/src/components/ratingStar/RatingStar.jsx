import StarRoundedIcon from '@mui/icons-material/StarRounded'

const RatingStar = ({ rating }) => {
	return (
		<div className='flex items-center'>
			<StarRoundedIcon className='text-gold' />
			<span className=' text-sm font-medium text-dark-blue'>{rating}</span>
		</div>
	)
}

export default RatingStar
