import React from 'react';

const ContactForm = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		return fetch('/contact-us', {
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
			.then((res) => res.json())
			.then((res) => res);
	};

	return (
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
	);
};

export default ContactForm;
