import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Seperator from '../../../../assets/line-seperator'
import MenuTabs from '../menu-tabs/MenuTabs'

const DashboardMenu = ({
	tab,
	setTab,
	editAddressModal,
	setEditAddressModal,
	addressId,
	setAddressId,
	setDeleteAddress,
	authData,
}) => {
	return (
		<div
			className={`${
				tab === '' ? 'overflow-hidden' : 'overflow-scroll'
			} relative w-full min-w-320px max-w-xl overflow-x-hidden
		rounded-xLarge bg-light-bluish-gray p-6`}>
			<menu className='right-0 bottom-0 top-0 left-0 flex flex-col first:pt-0'>
				<li className='dashboard-menu-item' onClick={() => setTab('addresses')}>
					Addresses
					<KeyboardArrowRightIcon />
				</li>
				<Seperator />
				<li className='dashboard-menu-item' onClick={() => setTab('orders')}>
					Orders
					<KeyboardArrowRightIcon />
				</li>
				<Seperator />
				<li className='dashboard-menu-item' onClick={() => setTab('comments')}>
					Comments
					<KeyboardArrowRightIcon />
				</li>
				<Seperator />

				<li className='dashboard-menu-item' onClick={() => setTab('reviews')}>
					Reviews
					<KeyboardArrowRightIcon />
				</li>
				<Seperator />

				<li
					className='dashboard-menu-item'
					onClick={() => setTab('edit-profile')}>
					Edit Profile
					<KeyboardArrowRightIcon />
				</li>
				<Seperator />

				<li className='dashboard-menu-item'>
					Log Out
					<KeyboardArrowRightIcon />
				</li>
			</menu>

			<MenuTabs
				className='md:hidden'
				tab={tab}
				setTab={setTab}
				editAddressModal={editAddressModal}
				setEditAddressModal={setEditAddressModal}
				setDeleteAddress={setDeleteAddress}
				addressId={addressId}
				setAddressId={setAddressId}
				authData={authData}
			/>
		</div>
	)
}

export default DashboardMenu
