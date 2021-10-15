import React from 'react';
import { ToastContainer } from 'react-toastify';

const Login = () => {
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
				<button className='login__submit' type='submit'>
					Log In
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Login;
