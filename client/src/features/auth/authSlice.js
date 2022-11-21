import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api'

const initialState = {
	authData: JSON.parse(localStorage.getItem('user')),
	isLoading: false,
	failed: false,
	errorMessage: '',
}

export const signin = createAsyncThunk(
	'auth/signin',
	async (args, thunkAPI) => {
		const { formData, navigate } = args
		try {
			const { data } = await api.signin(formData)
			navigate('/')
			return data
		} catch (error) {
			console.error(`Sign In failed ${error}`)
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

export const signup = createAsyncThunk(
	'auth/signup',
	async (args, thunkAPI) => {
		const { formData, navigate } = args
		try {
			const { data } = await api.signup(formData)
			navigate('/')
			return data
		} catch (error) {
			console.error(`Sign Up failed ${error}`)
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authLogout: (state) => {
			state.authData = null
			localStorage.clear()
		},
		googleAuth: (state, { payload }) => {
			const user = {
				name: `${payload.user_info.given_name}, ${payload.user_info.family_name}`,
				email: payload.user_info.email,
				token: payload.token,
			}
			state.authData = { ...user }
			localStorage.setItem('user', JSON.stringify(state.authData))
			const navigate = payload.navigate
			navigate('/')
		},
	},
	extraReducers: {
		[signin.pending]: (state, action) => {
			state.isLoading = true
		},
		[signin.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.failed = true
			state.errorMessage = payload
		},
		[signin.fulfilled]: (state, { payload }) => {
			state.authData = { ...payload.result, token: payload.token }
			localStorage.setItem('user', JSON.stringify(state.authData))
			state.isLoading = false
		},
		[signup.pending]: (state, action) => {
			state.isLoading = true
		},
		[signup.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.failed = true
			state.errorMessage = payload
		},
		[signup.fulfilled]: (state, { payload }) => {
			state.authData = { ...payload.result, token: payload.token }
			localStorage.setItem('user', JSON.stringify(state.authData))
			state.isLoading = false
		},
	},
})

export const { authLogout, googleAuth } = authSlice.actions

export default authSlice.reducer
