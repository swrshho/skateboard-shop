import FileBase64 from 'react-file-base64'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserProfile } from '../../../../features/auth/authSlice'

import Button from '../../../../components/button'
import CloseIcon from '@mui/icons-material/Close'
import Spinner from '../../../../components/spinner'

const EditProfileModal = ({
	userId,
	isLoading,
	edtiProfileModal,
	setEditProfileModal,
}) => {
	const dispatch = useDispatch()
	const [picture, setPicture] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		const jsonData = JSON.stringify({ id: userId, picture })
		dispatch(updateUserProfile(jsonData))
		if (isLoading === false) {
			setEditProfileModal(false)
		}
	}
	return (
		<>
			<div
				className={`absolute flex w-full min-w-320px max-w-lg flex-col justify-between gap-4 self-center rounded-xLarge bg-light-bluish-gray p-7 shadow-2xl ${
					edtiProfileModal ? 'block' : 'hidden'
				} ${isLoading ? 'blur' : ''}`}>
				<div className='flex justify-between'>
					<span className='text-xl font-bold'>Change Profile Picture</span>
					<div
						className='cursor-pointer'
						onClick={() => setEditProfileModal(false)}>
						<CloseIcon />
					</div>
				</div>
				<form
					autoComplete='off'
					className='flex flex-col items-center gap-4'
					onSubmit={handleSubmit}>
					<div className='flex flex-col gap-2'>
						<span className='font-semibold'>Select a file:</span>
						<div className='rounded-lg border-2 border-slate-300 p-2'>
							<FileBase64
								type='file'
								multiple={false}
								onDone={({ base64 }) => setPicture(base64)}
							/>
						</div>
					</div>
					<Button type='submit' rounded className='w-48'>
						Save Changes
					</Button>
				</form>
			</div>
			{isLoading ? (
				<div className='absolute -top-20 flex h-screen w-full items-center justify-center'>
					<Spinner color='primary' />
				</div>
			) : null}
		</>
	)
}

export default EditProfileModal
