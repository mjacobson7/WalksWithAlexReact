import React from 'react';
import FAQItem from './FAQItem';

const FAQ = () => {
	return (
		<main className='page'>
			<h1 className='heading-text page__title'>FAQ</h1>
			<section className='faq'>
				<FAQItem
					question='How do I get started?'
					answer={
						<>
							Please fill out this super easy{' '}
							<a
								target='_blank'
								href='https://docs.google.com/forms/d/18Vb4pprKGOp0tzjPbqXrQKEKiwOME8GKT5vKSo4MkdY/viewform?edit_requested=true'
								rel='noreferrer'>
								form
							</a>{' '}
							or email{' '}
							<a href='mailto:info@walkswithalex.com'>info@walkswithalex.com</a>
							. Once your form is received we will set up a visit with you and
							your dog to make certain of their comfort level, establish a
							relationship with you and your dog, and answer any questions you
							might have :)
						</>
					}
				/>

				<FAQItem
					question='Are you insured?'
					answer={
						<>
							You know it! Walks With Alex is licensed and insured with{' '}
							<a
								href='https://www.petcareins.com/'
								target='_blank'
								rel='noreferrer'>
								Pet Care Business Insurance
							</a>
							.
						</>
					}
				/>

				<FAQItem
					question='What if my dog has special needs (separation anxiety, physical
					limitations, medication)?'
					answer="We're happy to accommodate any special requests. We have a long
					history of fostering dogs with varying medical and behavioral needs.
					It is of the utmost importance that your dog is set up for success
					when they arrive in our care."
				/>

				<FAQItem
					question='How do I know my dog will be safe in your care?'
					answer='Pet safety is our number one concern. With our extensive foster
					experience with all types of dogs (escape artists, dog selective,
					fearful, medical, etc), and our training (including pet first aid
					certification), we will ensure your pet is safe and feels
					comfortable. Your pet will never be left unattended with other
					animals, or off leash in an unsecured area, and we have a strict
					"2-door" policy when leaving the house. The dog we are with is our
					only focus during walks, and the only time our phone is out is to
					snap a cute photo of your pup!'
				/>

				<FAQItem
					question='What happens if my dog needs medical attention?'
					answer={`We will notify you immediately and use the veterinary information
					provided by you. If we cannot get in touch with you - we will call
					your emergency contact. In the event we are unable to connect with
					you and are unable to be accommodated by your preferred vet we will
					take your dog to Malibu Coast Animal Hospital and if it's after
					hours and a true emergency, we will take them to Access SFV.`}
				/>

				<FAQItem
					question='What is your cancellation policy?'
					answer='Please give us 24 hours notice when canceling on any service. Last
					minute cancellations within 24 hours are subject to a 50% charge of
					the service. If your cancellation is less than 12 hours in advance
					you will be fully charged. Holidays and other high demand dates may require a nonrefundable deposit'
				/>
			</section>
		</main>
	);
};

export default FAQ;
