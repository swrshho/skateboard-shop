const User = require('../models/user')
const Products = require('../models/products')

const addToCart = async (req, res) => {
	const productId = req.params
	const { userId } = req.body

	try {
		const product = await Products.findById(productId)

		if (!product) {
			res.status(404).json({ message: 'No Product With That Id' })
		}

		await User.findByIdAndUpdate(userId, {
			$push: { cart: { items: product } },
		})
	} catch (error) {
		res.status(409).json({ message: error.message })
	}
}

module.exports = { addToCart }
