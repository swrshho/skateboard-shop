import { Routes, Route } from 'react-router-dom'
import { userRoutes } from './router/allRoutes'

function App() {
	return (
		<>
			<Routes>
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
