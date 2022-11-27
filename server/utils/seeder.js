const dotenv = require('dotenv')
const connectDB = require('../config/connectDB')
const Product = require('../models/products')
const { productsData } = require('../data/producsts/products')

dotenv.config()
connectDB()

// import data from a js file
const importData = async () => {
	try {
		await Product.deleteMany()
		await Product.insertMany(productsData)
		console.log('Data Imported!')
		process.exit()
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

// delete all data from mongodb
const deleteData = async () => {
	try {
		await Product.deleteMany()
		console.log('All Data Deleted!')
		process.exit()
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') {
	destroyData()
} else {
	importData()
}
