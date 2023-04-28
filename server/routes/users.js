const express = require('express')
const router = express.Router()

const {
	signin,
	signup,
	googleLogin,
	getUser,
	updateProfile,
	addAddress,
	editAddress,
	deleteAddress,
} = require('../controllers/users')

const { auth } = require('../middleware/auth')

// authentication
router.post('/signin', signin)
router.post('/signup', signup)
router.post('/google', googleLogin)
router.get('/user/:id', getUser)

// user dashboard
router.post('/update-profile', updateProfile)
router.post('/add-address', auth, addAddress)
router.patch('/edit-address/:addressId/:userId', auth, editAddress)
router.patch('/delete-address/:id', auth, deleteAddress)
// router.post('/google/refresh-token', googleRefreshToken)

module.exports = router
