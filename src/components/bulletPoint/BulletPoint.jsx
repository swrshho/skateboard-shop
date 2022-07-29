const BulletPoint = ({ title, icon }) => {
	return (
		<div
			className='flex items-center justify-start w-full max-w-xs
      font-poppins font-bold text-2xl text-black capitalize
      border-b last-of-type:border-b-0 py-5 last-of-type:pb-0
      md:border-b-0 md:border-r md:py-0 md:px-5 md:first-of-type:pl-0 md:last-of-type:border-r-0 md:last-of-type:pr-0
      lg:flex-col lg:justify-center lg:items-center'>
			{icon}
			<p className='w-fit ml-4 text-center'>{title}</p>
		</div>
	)
}

export default BulletPoint
