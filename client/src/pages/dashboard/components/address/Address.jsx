import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddress } from '../../../../features/auth/authSlice'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import Seperator from '../../../../assets/line-seperator/Seperator'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const Address = ({
	address,
	setEditAddressModal,
	authData,
	setAddressId,
	setDeleteAddress,
}) => {
	const { dataLoading } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const [dropdown, setDropdown] = useState(false)

	const editAddressHandler = () => {
		setAddressId(address._id)
		setEditAddressModal(true)
		setDropdown(false)
	}

	useEffect(() => {
		if (dataLoading) {
			setDeleteAddress(true)
		} else {
			setDeleteAddress(false)
		}
	}, [dataLoading])

	const deleteAddressHandler = () => {
		dispatch(deleteAddress({ addressId: address._id, userId: authData._id }))
	}
	return (
		<>
			<div
				className={`overlay fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 sm:hidden ${
					dropdown ? 'bloack' : 'hidden'
				}`}
				onClick={() => setDropdown(false)}
			/>
			<div className='flex flex-col gap-3 rounded-lg border-2 border-neutral-300 p-4 shadow-md'>
				<div className='flex justify-between sm:relative'>
					<p>{address.address}</p>
					<span
						className='cursor-pointer'
						onClick={() => setDropdown(!dropdown)}>
						<MoreVertIcon />
					</span>

					<div
						className={`${
							dropdown ? 'block' : 'hidden'
						} fixed flex w-full flex-col gap-2 rounded-t-3xl bg-white p-2 sm:absolute sm:right-0 sm:top-6 sm:w-48 sm:rounded-lg sm-down:bottom-0 sm-down:left-0`}>
						<button
							onClick={editAddressHandler}
							className='flex w-full justify-between rounded p-1 text-left transition-all hover:bg-slate-200 '>
							Change Address
							<EditIcon className='text-dark-blue' />
						</button>
						<Seperator />
						<button
							onClick={deleteAddressHandler}
							className='flex w-full justify-between rounded p-1 text-left transition-all hover:bg-slate-200'>
							Delete Address
							<DeleteIcon className='text-red' />
						</button>
					</div>
				</div>
				<div className='flex flex-col text-darkGray'>
					<span>
						City: <span className='text-black'>{address.city}</span>
					</span>
					<span>
						Zip/Postal code:{' '}
						<span className='text-black'>{address.postalCode}</span>
					</span>
					<span>
						Phone Number:{' '}
						<span className='text-black'>{address.phoneNumber}</span>
					</span>
				</div>
			</div>
		</>
	)
}

export default Address
