import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useGoogleLogin } from '@react-oauth/google'
import { apiGoogleAuth } from '../../api'
import decode from 'jwt-decode'
// assets and content
import Navbar from '../../components/navbar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import GoogleIcon from '@mui/icons-material/Google'
import Button from '../../components/button'
import Input from '../../components/input'

// actions
import { signin, signup, googleAuth } from '../../features/auth/authSlice'

const Auth = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [isSignUp, setIsSignUp] = useState(false)
	const switchMode = () => {
		setIsSignUp(!isSignUp)
	}

	const initialFormState = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	}

	const [formData, setFormData] = useState(initialFormState)

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (isSignUp) {
			dispatch(signup({ formData, navigate }))
		} else {
			dispatch(signin({ formData, navigate }))
		}
	}
	const googleLogin = useGoogleLogin({
		onSuccess: async ({ code }) => {
			let user_info
			let token
			try {
				const { data } = await apiGoogleAuth(code)
				user_info = decode(data.tokens.id_token)
				token = data.tokens.id_token
			} catch (error) {
				console.error(`Google Login Failed ${error}`)
			}
			dispatch(googleAuth({ user_info, token, navigate }))
		},
		flow: 'auth-code',
	})
	return (
		<>
			<Navbar />
			<div className=' bg-pattern h-screen items-center justify-center overflow-y-auto bg-contain bg-center p-2 font-poppins'>
				<div className='flex items-center justify-center'>
					<div className=' mt-20 flex w-fit flex-col items-center justify-center self-center bg-half-black p-4'>
						<div className='mt-4 mb-4 flex flex-col items-center justify-center'>
							<div className='flex items-center justify-center rounded-full bg-red p-2 text-xl text-white '>
								<LockOutlinedIcon fontSize='medium' />
							</div>
							<h5 className='mt-2 text-2xl text-white'>
								{isSignUp ? 'Sign Up' : 'Sign In'}
							</h5>
						</div>

						<form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
							{isSignUp && (
								<>
									<Input
										type='text'
										placeHolder='Your First Name'
										name='firstName'
										label='First Name'
										onChange={handleChange}
									/>
									<Input
										type='text'
										placeHolder='Your Last Name'
										name='lastName'
										label='Last Name'
										onChange={handleChange}
									/>
								</>
							)}
							<Input
								type='email'
								placeHolder='Your Email Address'
								name='email'
								label='Email'
								onChange={handleChange}
							/>
							<Input
								type='password'
								placeHolder='Your Password'
								name='password'
								label='Password'
								onChange={handleChange}
							/>
							{isSignUp && (
								<Input
									type='password'
									placeHolder='Confirm Your Password'
									name='confirmPassword'
									label='Confirm Password'
									onChange={handleChange}
								/>
							)}

							<Button type='submit' rounded color='primary'>
								{isSignUp ? 'Sign Up' : 'Sign In'}
							</Button>

							<Button
								className='flex items-center justify-center'
								type='button'
								onClick={googleLogin}
								rounded
								color='secondry'>
								<GoogleIcon className='mr-1' />
								Sign In With Google
							</Button>

							<Button
								onClick={switchMode}
								type='button'
								rounded
								color='secondry'>
								{isSignUp
									? 'Already have an account? Sign In'
									: "Don't have an account? Sign Up"}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Auth
