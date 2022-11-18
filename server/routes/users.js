const express = require('express')
const router = express.Router()

const { signin, signup, googleLogin } = require('../controllers/users')

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/google', googleLogin)
// router.post('/google/refresh-token', googleRefreshToken)

module.exports = router
