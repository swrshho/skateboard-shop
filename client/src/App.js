import { Routes, Route, Navigate } from 'react-router-dom'
import { userRoutes } from './router/allRoutes'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to='/home' replace />} />
				{userRoutes.map((route, idx) => {
					return (
						<Route
							key={idx}
							exact
							path={route.path}
							element={route.component}
						/>
					)
				})}
			</Routes>
		</>
	)
}

export default App
