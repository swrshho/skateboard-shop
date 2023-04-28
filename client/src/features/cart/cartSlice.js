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
				state.errorMessage = "You can't buy more than one of each product :)"
			} else {
				state.items.push(payload)
			}
		},

		removeFromCart: (state, { payload }) => {
			state.items = state.items.filter((item) => item._id !== payload)
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
