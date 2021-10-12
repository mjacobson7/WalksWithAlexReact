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
						price='$20'
						visibleText='Similar to our 60 minute walk, but with more focus on physical
						activity'
						hiddenText='(Additional dog: $5)'
						image={walk30Image}
					/>
					<ServiceItem
						title='Boarding'
						price='$75/night'
						visibleText={`An in-home overnight stay made to replicate your dog's own home`}
						hiddenText={`environment. With opportunities to socialize or have play time
						in their own space, depending on your dog's needs. What's
						included: Morning and evening walks with potty breaks in
						between, social time with our dogs in a safe controlled
						environment, daily reports and photos, custom training
						reinforcement. (Additional dog: $30, house-sitting available
						upon request)`}
						image={boardingImage}
					/>
					<ServiceItem
						title='Daycare'
						price='$60'
						visibleText='Similar to our overnight stays, your pup will receive multiple
						walks, play time to'
						hiddenText={`promote engagement with humans and other dogs, and stimulate
						their brain and body. What's included: daycare report, photos,
						on demand updates. (Additional dog: $30)`}
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
