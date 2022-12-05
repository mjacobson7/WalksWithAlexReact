import React from 'react';
import walk30Image from '../images/walk30.webp';
import walk60Image from '../images/walk60.webp';
import boardingImage from '../images/services_boarding.jpeg';
import daycareImage from '../images/daycare.png';
import trainingImage from '../images/training.jpeg';
import photographyImage from '../images/services_pet-photography.jpeg';
import ServiceItem from './ServiceItem';

const Services = () => {
	return (
		<main>
			<section className='services'>
				<h2 className='services__title heading-text'>Services</h2>
				<ul className='cards'>
					<ServiceItem
						title='60 Minute Walk'
						price='$30'
						visibleText='A customized experience for your dog to keep them physically and'
						hiddenText={`mentally engaged. What's included: a recap of our adventure,
								action photo, and an activity report. (Additional dog: $10)`}
						image={walk60Image}
					/>
					<ServiceItem
						title='30 Minute Walk'
						price='$25'
						visibleText='Similar to our 60 minute walk, but with more focus on physical
						activity'
						hiddenText='(Additional dog: $5)'
						image={walk30Image}
					/>
					<ServiceItem
						title='Boarding'
						price='$75/night'
						visibleText={`We are restructuring our boarding program, please inquire via email for availability`}
						hiddenText={``}
						image={boardingImage}
					/>
					<ServiceItem
						title='Daycamp'
						price='$60'
						visibleText='Your dog will spend the day with a customized experience'
						hiddenText={`tailored to their 
						needs and comfort level, which includes opportunities for play time with humans and other
						 dogs, mental and physical enrichment, and training using positive reinforcement and games.
						  In addition you will receive a report of their experience, photos, and on demand updates.`}
						image={daycareImage}
					/>
					<ServiceItem
						title='Photography'
						price='$100'
						visibleText='A custom photoshoot in the studio or at an outdoor location with
						5-10'
						hiddenText='portraits of your pet to choose from.'
						image={photographyImage}
					/>
					<ServiceItem
						title='Training'
						price='$TBD'
						visibleText='Coming soon!'
						image={trainingImage}
					/>
				</ul>
			</section>
		</main>
	);
};

export default Services;
