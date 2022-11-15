const bcrypt = require('bcrypt')
const jwt = require0('jsonwebtoken')

const User = require('../models/user')

const signUp = async (req, res) => {
	const { firstName, lastName, email, password, confirmPassword } = req.body

	try {
		const existingUser = User.findOne({ email })

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

		const token = json.sign({ email: result.email, id: result._id }, 'test', {
			expiresIn: '1h',
		})

		res.status(200).json({ result, token })
	} catch (error) {
		res.status(500).json({ message: `Something Went Wrong: ${error}` })
	}
}

const signIn = async (req, res) => {
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
	} catch (error) {}
}

module.exports = { signIn, signUp }
