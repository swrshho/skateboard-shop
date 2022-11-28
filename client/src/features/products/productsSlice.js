import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api'

const initialState = {
	products: [],
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

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[getProducts.fulfilled]: (state, { payload }) => {
			state.products = payload
		},
	},
})

export default productsSlice.reducer
