const Spinner = ({ color = 'primary' || 'secondry' }) => {
	return (
		<div
			className={`${
				color === 'primary'
					? 'loading-whirl'
					: 'loading-whirl loading-whirl-secondry'
			}`}
		/>
	)
}

export default Spinner
