import Header from './Header';
import Footer from './Footer';

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Reviews from './Reviews';
import Rescue from './Rescue';
import FAQ from './FAQ';
import Login from './Login';
import Admin from './Admin';
import { useEffect, useState } from 'react';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	useEffect(() => {}, []);

	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route exact path='/services'>
					<Services />
				</Route>
				<Route exact path='/reviews'>
					<Reviews />
				</Route>
				<Route exact path='/rescue'>
					<Rescue />
				</Route>
				<Route exact path='/faq'>
					<FAQ />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route
					exact
					path='/admin'
					render={() =>
						isAuthenticated ? <Admin /> : <Redirect to='/' />
					}></Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
