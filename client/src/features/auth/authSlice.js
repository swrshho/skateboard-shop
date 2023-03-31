import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api'

const initialState = {
	authData: JSON.parse(localStorage.getItem('user')),
	isLoading: false,
	dataLoading: false,
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

export const getUserById = createAsyncThunk(
	'auth/getUser',
	async (id, thunkAPI) => {
		try {
			const { data } = await api.getUser(id)
			return data
		} catch (error) {
			console.error(`Geting User Failed ${error}`)
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

export const updateUserProfile = createAsyncThunk(
	'auth/updateUserProfile',
	async (obj, thunkAPI) => {
		try {
			const { data } = await api.updateProfile(obj)
			return data
		} catch (error) {
			console.error(`Updating User Profile Failed ${error.response.data}`)
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

export const addAddress = createAsyncThunk(
	'auth/addAddress',
	async (formData, thunkAPI) => {
		try {
			const { data } = await api.addAddress(formData)
			return data
		} catch (error) {
			console.error(`Adding new address failed ${error.response.data}`)
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

export const editAddress = createAsyncThunk(
	'auth/editAddress',
	async (args, thunkAPI) => {
		const { addressId, userId, formData } = args
		try {
			await api.editAddress(addressId, userId, formData)
		} catch (error) {
			console.error(`Editing address failed ${error.response.data}`)
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

export const deleteAddress = createAsyncThunk(
	'auth/deleteAddress',
	async (args, thunkAPI) => {
		const { addressId, userId } = args
		try {
			await api.deleteAddress(addressId, userId)
		} catch (error) {
			console.error(`Deleting address failed ${error.response.data}`)
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
			console.log(payload)
			const user = {
				name: payload.user_info.given_name,
				email: payload.user_info.email,
				token: payload.token,
				picture: payload.user_info.picture,
			}
			state.authData = { ...user }
			localStorage.setItem('user', JSON.stringify(state.authData))
			const navigate = payload.navigate
			navigate('/')
		},
		clearError: (state) => {
			state.failed = false
			state.errorMessage = false
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
		[getUserById.fulfilled]: (state, { payload }) => {
			state.authData = { ...payload }
		},
		[updateUserProfile.pending]: (state, { payload }) => {
			state.isLoading = true
		},
		[updateUserProfile.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.authData = { ...state.authData, picture: payload.picture }
		},
		[updateUserProfile.rejected]: (state, { payload }) => {
			state.isLoading = false
		},
		[addAddress.pending]: (state) => {
			state.dataLoading = true
		},
		[addAddress.fulfilled]: (state) => {
			state.dataLoading = false
		},
		[addAddress.rejected]: (state) => {
			state.dataLoading = false
		},
		[editAddress.pending]: (state) => {
			state.dataLoading = true
		},
		[editAddress.fulfilled]: (state) => {
			state.dataLoading = false
		},
		[editAddress.rejected]: (state) => {
			state.dataLoading = false
		},
		[deleteAddress.pending]: (state) => {
			state.dataLoading = true
		},
		[deleteAddress.fulfilled]: (state) => {
			state.dataLoading = false
		},
		[deleteAddress.rejected]: (state) => {
			state.dataLoading = false
		},
	},
})

export const { authLogout, googleAuth, clearError, setEditedAddress } =
	authSlice.actions

export default authSlice.reducer
