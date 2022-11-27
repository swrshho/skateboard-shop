const mongoose = require('mongoose')

const connectDB = async () => {
	const MONGOOSE_CONNECTION_URI = process.env.MONGOOSE_CONNECTION_URI
	try {
		await mongoose.connect(MONGOOSE_CONNECTION_URI)
		console.log('DB connected')
	} catch (error) {
		console.error(`DB connection failed, ${error}`)
		process.exit(1)
	}
}

module.exports = connectDB
