const Products = require('../models/products')

const getProducts = async (req, res) => {
	try {
		const products = await Products.find()
		res.status(200).json(products)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

const getProductById = async (req, res) => {
	try {
		const { id } = req.params
		const product = await Products.findById(id)
		res.status(200).json(product)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

module.exports = { getProducts, getProductById }
