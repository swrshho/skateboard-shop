import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserById } from '../../features/auth/authSlice'
import Layout from '../../layout/Layout'

// Content & Components
import UserStats from './components/user-stats'
import EditProfileModal from './components/edit-profile-modal'
import DashboardMenu from './components/dashboard-menu'
import MenuTabs from './components/menu-tabs'
import AddressForm from './components/edit-address-modal/AddressForm'

const Dashboard = () => {
	const dispatch = useDispatch()
	const [editAddressModal, setEditAddressModal] = useState(false)
	const [editProfileModal, setEditProfileModal] = useState(false)
	const [deleteAddress, setDeleteAddress] = useState(false)
	const [addressId, setAddressId] = useState(0)
	const [tab, setTab] = useState(window.innerWidth > 768 ? 'addresses' : '')
	const { authData, isLoading, dataLoading } = useSelector(
		(state) => state.auth
	)

	useEffect(() => {
		dispatch(getUserById(authData._id))
	}, [editAddressModal, deleteAddress])

	return (
		<Layout>
			<div
				className={`dashboard-parent flex h-full flex-col items-center justify-center gap-8 bg-dark-blue p-4 pt-20 font-poppins
				md:flex-row md:items-start md:justify-around md:p-7 md:pt-20`}>
				<div className='flex w-full max-w-xl flex-col items-center gap-8'>
					<div className='flex w-full min-w-320px max-w-xl flex-col items-center justify-center'>
						<UserStats
							user={authData}
							editProfileModal={editProfileModal}
							seteEitProfileModal={setEditProfileModal}
						/>

						<EditProfileModal
							userId={authData._id}
							isLoading={isLoading}
							editProfileModal={editProfileModal}
							setEditProfileModal={setEditProfileModal}
						/>
					</div>
					<DashboardMenu
						tab={tab}
						setTab={setTab}
						editAddressModal={editAddressModal}
						addressId={addressId}
						setAddressId={setAddressId}
						setDeleteAddress={setDeleteAddress}
						setEditAddressModal={setEditAddressModal}
						authData={authData}
					/>
				</div>

				<div className='flex h-full w-full justify-center'>
					<MenuTabs
						className='h-full w-full md:relative md-down:hidden'
						tab={tab}
						setTab={setTab}
						editAddressModal={editAddressModal}
						setEditAddressModal={setEditAddressModal}
						addressId={addressId}
						setAddressId={setAddressId}
						authData={authData}
						setDeleteAddress={setDeleteAddress}
					/>

					<AddressForm
						addressId={addressId}
						userId={authData._id}
						editAddressModal={editAddressModal}
						setEditAddressModal={setEditAddressModal}
						dataLoading={dataLoading}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Dashboard
