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
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		tokenCheck();
	}, []);

	const tokenCheck = () => {
		if (localStorage.getItem('token')) {
			const token = localStorage.getItem('token');
			fetch('/users/me', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((res) => res.json())
				.then((user) => {
					if (user) {
						localStorage.setItem('user', JSON.stringify(user));
						setIsLoggedIn(true);
					}
				});
		}
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

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
					<Login handleLogin={handleLogin} />
				</Route>
				<Route
					exact
					path='/admin'
					render={() => (isLoggedIn ? <Admin /> : <Redirect to='/' />)}></Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
