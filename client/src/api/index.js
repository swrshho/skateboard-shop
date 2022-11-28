import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

// Authentication
export const signin = (formData) => API.post('/users/signin', formData)
export const signup = (formData) => API.post('/users/signup', formData)
// Google oAuth
export const apiGoogleAuth = (code) => API.post('/users/google', { code })

// Products
export const fetchProducts = () => API.get('/products')
