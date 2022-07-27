import Layout from './../../layout'
import Hero from './components/hero/Hero'
import Divercity from './components/divercity/Divercity'
import Populars from './components/populars/Populars'

const HomePage = () => {
	return (
		<Layout>
			<Hero />
			<Divercity />
			<Populars />
		</Layout>
	)
}

export default HomePage
