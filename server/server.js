const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json())

const MONGOOSE_CONNECTION_URI = process.env.MONGOOSE_CONNECTION_URI
const PORT = process.env.PORT || 5000

app.get('/posts', () => console.log(MONGOOSE_CONNECTION_URI))

mongoose
	.connect(MONGOOSE_CONNECTION_URI)
	.then(() => {
		app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
	})
	.catch((error) => console.error(error))
