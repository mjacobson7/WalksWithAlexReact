import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		fetch('/contact-us', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: e.target.name.value,
				email: e.target.email.value,
				message: e.target.message.value,
			}),
		})
			.then((res) => {
				e.target.reset();
				if (!res.ok) {
					throw Error(res.statusText);
				}
				toast('Message sent!', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					progress: undefined,
					type: 'success',
				});
			})
			.catch(() => {
				toast('Unexpected Error! Please try again.', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					progress: undefined,
					type: 'error',
				});
			});
	};

	return (
		<>
			<form className='contact' onSubmit={handleFormSubmit}>
				<input
					className='contact__input contact__input_type_name'
					aria-label='Name'
					placeholder='Name'
					type='text'
					name='name'
					required
				/>
				<input
					className='contact__input contact__input_type_email'
					aria-label='Email'
					placeholder='Email'
					type='email'
					name='email'
					required
				/>
				<textarea
					name='message'
					id=''
					cols='30'
					rows='10'
					aria-label='Message'
					className='contact__input contact__input_type_message'
					placeholder='Type your message here'
					required></textarea>
				<button className='contact__submit' type='submit'>
					Submit
				</button>
			</form>
			<ToastContainer />
		</>
	);
};

export default ContactForm;
