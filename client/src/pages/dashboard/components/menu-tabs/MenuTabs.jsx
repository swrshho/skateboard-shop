import { useSelector } from 'react-redux'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import Address from '../address/Address'
import Button from '../../../../components/button'
import Spinner from '../../../../components/spinner/Spinner'

const MenuTabs = ({
	tab,
	setTab,
	editAddressModal,
	setEditAddressModal,
	addressId,
	setAddressId,
	authData,
	setDeleteAddress,
	className,
}) => {
	const { dataLoading } = useSelector((state) => state.auth)

	const addAddressHandler = () => {
		setAddressId(0)
		setEditAddressModal(!editAddressModal)
	}

	return (
		<div className={`${className}`}>
			{/* Addresses tab */}
			<div
				className={`${
					dataLoading ? 'flex' : 'hidden'
				} loading absolute left-0 top-0 z-10 flex h-full w-full
				items-center justify-center`}>
				<Spinner color='primary' />
			</div>
			<div
				className={`menu-tab ${
					tab === 'addresses'
						? 'md:flex md-down:left-0'
						: 'self-stretch md:hidden md-down:left-650px'
				}`}>
				<span className='menu-tab-heading w-full justify-between'>
					<span>
						<span className='md:hidden'>
							<KeyboardArrowLeftIcon
								fontSize='large'
								className='cursor-pointer md:hidden'
								onClick={() => setTab('')}
							/>
						</span>
						My Addresses:
					</span>
					<Button
						color='secondry'
						onClick={addAddressHandler}
						rounded
						className={'px-1 py-1 text-lg'}>
						Add New Address
					</Button>
				</span>
				<div className='addresse-wrapper mt-4 flex flex-col gap-4'>
					{authData.addresses.map((address, idx) => (
						<Address
							authData={authData}
							address={address}
							setEditAddressModal={setEditAddressModal}
							setAddressId={setAddressId}
							setDeleteAddress={setDeleteAddress}
							key={idx}
						/>
					))}
				</div>
				<div
					className={`${
						editAddressModal || dataLoading ? 'flex' : 'hidden'
					} absolute left-0 top-0 z-0 h-full w-full rounded-xLarge bg-whiteBg opacity-50 blur-sm`}></div>
			</div>

			{/* Orders */}
			<div
				className={`menu-tab
    ${
			tab === 'orders'
				? 'md:flex md-down:left-0'
				: 'md:hidden md:h-full md-down:left-650px'
		}`}>
				<span className='menu-tab-heading'>
					<span className='md:hidden'>
						<KeyboardArrowLeftIcon
							fontSize='large'
							className='cursor-pointer md:hidden'
							onClick={() => setTab('')}
						/>
					</span>
					My Orders:
				</span>
			</div>
			{/* Comments */}
			<div
				className={`menu-tab
    ${
			tab === 'comments'
				? 'md:flex md-down:left-0'
				: 'md:hidden md:h-full md-down:left-650px'
		}`}>
				<span className='menu-tab-heading'>
					<span className='md:hidden'>
						<KeyboardArrowLeftIcon
							fontSize='large'
							className='cursor-pointer md:hidden'
							onClick={() => setTab('')}
						/>
					</span>
					My Comments:
				</span>
			</div>
			{/* Reviews */}
			<div
				className={`menu-tab
    ${
			tab === 'reviews'
				? 'md:flex md-down:left-0'
				: 'md:hidden md:h-full md-down:left-650px'
		}`}>
				<span className='menu-tab-heading'>
					<span className='md:hidden'>
						<KeyboardArrowLeftIcon
							fontSize='large'
							className='cursor-pointer md:hidden'
							onClick={() => setTab('')}
						/>
					</span>
					My Reviews:
				</span>
			</div>
			{/* Edit Profile */}
			<div
				className={`menu-tab
    ${
			tab === 'edit-profile'
				? 'flex md-down:left-0'
				: 'hidden md:h-full md-down:left-650px'
		}`}>
				<span className='menu-tab-heading'>
					<span className='md:hidden'>
						<KeyboardArrowLeftIcon
							fontSize='large'
							className='cursor-pointer md:hidden'
							onClick={() => setTab('')}
						/>
					</span>
					Edit Profile:
				</span>
			</div>
			{/* Log Out */}
		</div>
	)
}

export default MenuTabs
