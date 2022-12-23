import { getPanelId } from '@mui/base'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api'

const initialState = {
	products: [],
	isLoading: false,
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
	},
})

export default productsSlice.reducer
