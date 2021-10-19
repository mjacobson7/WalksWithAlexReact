import React from 'react';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Login = ({ handleLogin }) => {
	const history = useHistory();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		fetch('/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				localStorage.setItem('token', res.token);
				localStorage.setItem('user', JSON.stringify(res.user));
				handleLogin();
				history.push('/admin');
			});
	};

	return (
		<div className='login'>
			<form className='login__form' onSubmit={handleFormSubmit}>
				<input
					className='login__input'
					aria-label='Email'
					placeholder='Email'
					type='text'
					name='email'
					required
				/>
				<input
					className='login__input'
					aria-label='Password'
					placeholder='Password'
					type='password'
					name='password'
					required
				/>
				<button className='button button_color_transparent' type='submit'>
					Log In
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Login;
