const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	image: { type: String, required: true },
	rating: { type: Number, required: true, default: 0 },
})

module.exports = mongoose.model('Product', productSchema)
