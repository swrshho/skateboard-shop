const express = require('express')
const router = express.Router()

const { getProducts, getProductById } = require('../controllers/products')

router.get('/', getProducts)
router.get('/product/:id', getProductById)

module.exports = router
