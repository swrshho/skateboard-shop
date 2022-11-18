import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<GoogleOAuthProvider clientId='1074669176488-o6ke9rasqq68n9u4vvg85o20skslrgf2.apps.googleusercontent.com'>
					<App />
				</GoogleOAuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
