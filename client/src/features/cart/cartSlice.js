import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	isLoading: false,
	errorMessage: '',
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			if (state.items.some((item) => item._id === payload._id)) {
				state.errorMessage = "You can't but more than one of product item :)"
			} else {
				state.items.push(payload)
			}
		},
	},
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
