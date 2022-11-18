import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api'

const initialState = {
	authData: JSON.parse(localStorage.getItem('user')),
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
			return thunkAPI.rejectWithValue('Sign In failed')
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
			return thunkAPI.rejectWithValue('Sign Up failed')
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
		[signin.fulfilled]: (state, { payload }) => {
			state.authData = { ...payload.result, token: payload.token }
			localStorage.setItem('user', JSON.stringify(state.authData))
		},
		[signup.fulfilled]: (state, { payload }) => {
			state.authData = { ...payload.result, token: payload.token }
			localStorage.setItem('user', JSON.stringify(state.authData))
		},
	},
})

export const { authLogout, googleAuth } = authSlice.actions

export default authSlice.reducer
