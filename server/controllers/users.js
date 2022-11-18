const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')

const User = require('../models/user')

const oAuth2Client = new OAuth2Client(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	'postmessage'
)

const signup = async (req, res) => {
	const { firstName, lastName, email, password, confirmPassword } = req.body

	try {
		const existingUser = await User.findOne({ email })

		if (existingUser) {
			return res.status(400).json({ message: 'User Already Exists' })
		}

		if (password !== confirmPassword) {
			return res.status(400).json({ message: "Passwords Don't Match" })
		}

		const hashedPassword = await bcrypt.hash(password, 12)
		const result = await User.create({
			email,
			password: hashedPassword,
			name: `${firstName}, ${lastName}`,
		})

		const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
			expiresIn: '1h',
		})

		return res.status(200).json({ result, token })
	} catch (error) {
		return res.status(500).json({ message: `Sign Up failed ${error}` })
	}
}

const signin = async (req, res) => {
	const { email, password } = req.body

	try {
		const existingUser = await User.findOne({ email })

		if (!existingUser) {
			return res.status(404).json('There is no user with that email address')
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		)

		if (!isPasswordCorrect) {
			return res.status(400).json('Invalid Password')
		}

		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			'test',
			{ expiresIn: '1h' }
		)

		return res.status(200).json({ result: existingUser, token })
	} catch (error) {
		return res.status(500).json({ message: `Sign In failed ${error}` })
	}
}

const googleLogin = async (req, res) => {
	try {
		const { tokens } = await oAuth2Client.getToken(req.body.code)
		return res.status(200).json({ tokens })
	} catch (error) {
		return res.status(500).json({ message: `Google Login failed ${error}` })
	}
}
// const googleRefreshToken = () => {}

module.exports = { signin, signup, googleLogin }
