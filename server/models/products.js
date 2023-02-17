const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
	},
	{ timestamps: true }
)

const productSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	images: { type: [String], required: true },
	brand: { type: String, required: true },
	color: { type: String, required: true },
	size: { type: String, required: true },
	suitableFor: { type: String, required: true },
	maxWeight: { type: Number, required: true },
	material: { type: String, required: true },
	category: { type: String, required: true },
	reviews: [reviewSchema],
	comments: { type: [String], default: [] },
	rating: { type: Number, required: true, default: 0 },
	countInStock: { type: Number, required: true, default: 0 },
})

module.exports = mongoose.model('Product', productSchema)
