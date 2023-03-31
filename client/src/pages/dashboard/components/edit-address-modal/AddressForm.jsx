import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, editAddress } from '../../../../features/auth/authSlice'

import Button from '../../../../components/button'
import CloseIcon from '@mui/icons-material/Close'
import Spinner from '../../../../components/spinner'

const AddressForm = ({
	editAddressModal,
	setEditAddressModal,
	addressId,
	userId,
	dataLoading,
}) => {
	const dispatch = useDispatch()

	const initialFormState = {
		address: '',
		city: '',
		postalCode: '',
		phoneNumber: '',
	}

	const [formData, setFormData] = useState(initialFormState)

	const address = useSelector((state) => {
		return addressId
			? state.auth.authData.addresses.find(
					(address) => address._id === addressId
			  )
			: null
	})

	useEffect(() => {
		if (address) {
			setFormData(address)
		} else {
			setFormData(initialFormState)
		}
	}, [address])

	const clear = () => {
		setFormData(initialFormState)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (addressId) {
			console.log('edit')
			dispatch(editAddress({ addressId, userId: userId, formData }))
		} else {
			dispatch(addAddress(formData))
		}
		if (!dataLoading) {
			setEditAddressModal(false)
			clear()
		}
	}

	return (
		<>
			<div
				className={`absolute top-1/2 rounded-xLarge bg-light-bluish-gray p-5 shadow-2xl ${
					editAddressModal ? 'flex' : 'hidden'
				}`}>
				<div
					className={`${
						dataLoading ? 'flex' : 'hidden'
					} loading absolute left-0 top-0 z-10 h-full w-full
				items-center justify-center`}>
					<Spinner color='primary' />
				</div>
				<form
					method='post'
					onSubmit={handleSubmit}
					className={`'form z-0 mt-8 flex h-fit flex-col gap-4 ${
						dataLoading ? 'blur' : 'blur-0'
					}`}>
					<span className='form-item'>
						<label htmlFor='address' className='form-item-label'>
							Address:{' '}
						</label>
						<input
							type='text'
							id='address'
							name='address'
							className='form-item-input'
							value={formData.address}
							onChange={(e) =>
								setFormData({ ...formData, address: e.target.value })
							}
						/>
					</span>

					<span className='form-item'>
						<label htmlFor='city' className='form-item-label'>
							City:{' '}
						</label>
						<input
							type='text'
							id='city'
							name='city'
							value={formData.city}
							className='form-item-input'
							onChange={(e) =>
								setFormData({ ...formData, city: e.target.value })
							}
						/>
					</span>

					<span className='form-item'>
						<label htmlFor='postalCode' className='form-item-label'>
							Postal Code:{' '}
						</label>
						<input
							type='text'
							id='postalCode'
							name='postalCode'
							value={formData.postalCode}
							className='form-item-input'
							onChange={(e) =>
								setFormData({ ...formData, postalCode: e.target.value })
							}
						/>
					</span>

					<span className='form-item'>
						<label htmlFor='phoneNumber' className='form-item-label'>
							Phone Number:{' '}
						</label>
						<input
							type='text'
							id='phoneNumber'
							name='phoneNumber'
							value={formData.phoneNumber}
							className='form-item-input'
							onChange={(e) =>
								setFormData({ ...formData, phoneNumber: e.target.value })
							}
						/>
					</span>

					<Button color='primary' rounded type='submit'>
						submit
					</Button>
				</form>
				<CloseIcon
					className={`${
						dataLoading ? 'hidden' : 'block'
					} absolute right-5 cursor-pointer`}
					onClick={() => setEditAddressModal(false)}
				/>
			</div>
		</>
	)
}

export default AddressForm
