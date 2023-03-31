import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

//
API.interceptors.request.use((req) => {
	if (localStorage.getItem('user')) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('user')).token
		}`
	}
	return req
})

// Authentication
export const signin = (formData) => API.post('/users/signin', formData)
export const signup = (formData) => API.post('/users/signup', formData)
// Google oAuth
export const apiGoogleAuth = (code) => API.post('/users/google', { code })

// users
export const getUser = (id) => API.get(`/users/user/${id}`)
export const updateProfile = (obj) =>
	API.post('/users/update-profile', { data: obj })
// users - address
export const addAddress = (formData) => {
	API.post('/users/add-address', formData)
}
export const editAddress = (addressId, userId, formData) =>
	API.patch(`/users/edit-address/${addressId}/${userId}`, formData)

export const deleteAddress = (addressId, userId) =>
	API.patch(`/users/delete-address/${addressId}`, { userId: userId })

// Products
export const fetchProducts = () => API.get('/products')
export const fetchProductById = (id) => API.get(`/products/product/${id}`)
