import RotateRightIcon from '@mui/icons-material/RotateRight'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import EditIcon from '@mui/icons-material/Edit'

const UserStats = ({ user, editProfileModal, setEditProfileModal }) => {
	return (
		<div
			className={`flex w-full min-w-320px max-w-xl flex-col items-center gap-2 rounded-xLarge
		bg-light-bluish-gray p-6 font-poppins ${editProfileModal ? 'blur' : ''}`}>
			<div className='flex w-fit flex-col items-center'>
				<div
					onClick={() => setEditProfileModal(true)}
					className='rounded-50 profile-pic relative flex cursor-pointer flex-col items-center overflow-hidden'>
					<img
						className='h-20 w-20 object-cover'
						src={user.picture}
						alt={user.name}
					/>
					<span className='profile-pic-edit absolute -bottom-8 ml-2 flex h-7 w-full justify-center gap-1 bg-gray text-white opacity-80 transition-all'>
						Edit
						<EditIcon fontSize='small' />
					</span>
				</div>
				<span className='cap text-lg font-bold capitalize'>
					{user.name.split(',').join('')}
				</span>
			</div>
			<div className='mt-4 flex w-full max-w-sm flex-col items-center gap-3'>
				<span className='self-start font-medium'>My Orders:</span>
				<div className='mt-3 flex w-full items-center justify-between gap-6'>
					<div className='orders-stats'>
						<LocalShippingIcon fontSize='large' className='text-green-800' />
						{/* should be dynamic */}
						<span>0</span>
						<span>Delivered</span>
					</div>
					<div className='orders-stats'>
						<RotateRightIcon fontSize='large' className='text-blue-800' />
						{/* should be dynamic */}
						<span>0</span>
						<span>In Progress</span>
					</div>
					<div className='orders-stats'>
						<ProductionQuantityLimitsIcon
							fontSize='large'
							className='text-red'
						/>
						{/* should be dynamic */}
						<span>0</span>
						<span>Returned</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserStats
