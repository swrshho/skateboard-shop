import { getPanelId } from '@mui/base'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api'

const initialState = {
	products: [],
	product: null,
	isLoading: false,
	productLoading: true,
}

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (thunkAPI) => {
		try {
			const { data } = await api.fetchProducts()
			return data
		} catch (error) {
			console.error(`Fetching Products Failed ${error}`)
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

export const getProduct = createAsyncThunk(
	'products/getProduct',
	async (id, thunkAPI) => {
		try {
			const { data } = await api.fetchProductById(id)
			return data
		} catch (error) {
			console.error(`Fetching Product By ID Failed ${error.response.data}`)
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[getProducts.pending]: (state, action) => {
			state.isLoading = true
		},
		[getProducts.rejected]: (state, action) => {
			state.isLoading = false
		},
		[getProducts.fulfilled]: (state, { payload }) => {
			state.products = payload
			state.isLoading = false
		},
		[getProduct.pending]: (state, action) => {
			state.productLoading = true
		},
		[getProduct.rejected]: (state, action) => {
			state.productLoading = false
		},
		[getProduct.fulfilled]: (state, { payload }) => {
			state.product = payload
			state.productLoading = false
		},
	},
})

export default productsSlice.reducer
