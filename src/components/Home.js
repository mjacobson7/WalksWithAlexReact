import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.webp';
import walk30Image from '../images/walk30.webp';
import walk60Image from '../images/walk60.webp';
import boardingImage from '../images/services_boarding.jpeg';

import JennyAlexReviewImage from '../images/jenny_alex_review.png';
import ShastaReviewImage from '../images/shasta_review.webp';
import StaceyJasonReviewImage from '../images/stacey_jason_review.png';

import clients01 from '../images/clients01.png';
import clients02 from '../images/clients02.png';
import clients03 from '../images/clients03.png';
import clients04 from '../images/clients04.png';
import clients05 from '../images/clients05.webp';
import clients06 from '../images/clients06.webp';
import ImagesCarousel from './ImagesCarousel';
import useWindowDimensions from '../utils/WindowDimensions';

const Home = () => {
	const { width } = useWindowDimensions();

	const clientImages = [
		{ id: 1, link: clients01 },
		{ id: 2, link: clients02 },
		{ id: 3, link: clients03 },
		{ id: 4, link: clients04 },
		{ id: 5, link: clients05 },
		{ id: 6, link: clients06 },
	];

	return (
		<main>
			<section className='intro'>
				<h1 className='intro__title heading-text'>Pet Care</h1>
				<p className='intro__subtitle'>Walks | Boarding | Daycare</p>
				<a
					href='mailto:info@walkswithalex.com'
					className='intro__btn button button_color_yellow'>
					Schedule a Walk
				</a>
				<img className='intro__logo' src={logo} alt='Logo' />
			</section>
			<section className='mission'>
				<h2 className='mission__title heading-text'>Our Mission</h2>
				<p className='mission__description'>
					Walks With Alex is a top-notch Los Angeles based dog service company
					focused entirely on the physical and mental well-being of your
					fur-babe. We customize the experience for each dog by engaging,
					stimulating, and exploring the world with our doggy clients through
					exciting and structured activity.
				</p>
			</section>
			<section className='services'>
				<h2 className='services__title heading-text'>Popular Services</h2>
				<ul className='cards'>
					<li className='card'>
						<img src={walk30Image} alt='' className='card__img' />
						<h3 className='card__title'>Walk - 30 minutes</h3>

						<a
							href='https://forms.gle/yyQpGQHzP333hJDc7'
							target='_blank'
							className='card__btn button button_color_yellow'
							rel='noreferrer'>
							Book Now
						</a>
					</li>
					<li className='card'>
						<img src={walk60Image} alt='' className='card__img' />
						<h3 className='card__title'>Walk - 60 minutes</h3>

						<a
							href='https://forms.gle/yyQpGQHzP333hJDc7'
							target='_blank'
							className='card__btn button button_color_yellow'
							rel='noreferrer'>
							Book Now
						</a>
					</li>
					<li className='card'>
						<img src={boardingImage} alt='' className='card__img' />
						<h3 className='card__title'>Boarding - Overnight</h3>

						<a
							href='https://forms.gle/yyQpGQHzP333hJDc7'
							target='_blank'
							className='card__btn button button_color_yellow'
							rel='noreferrer'>
							Book Now
						</a>
					</li>
				</ul>
				<Link to='/services' className='button button_color_transparent'>
					All Services
				</Link>
			</section>
			<section className='clients'>
				<h2 className='clients__title heading-text'>We Love Our Clients</h2>
				<ImagesCarousel show={width > 900 ? 4 : width > 700 ? 3 : 1}>
					{clientImages.map((image) => (
						<div key={image.id}>
							<img
								src={image.link}
								alt=''
								style={{
									width: '100%',
									height: '300px',
									objectFit: 'contain',
								}}
							/>
						</div>
					))}
				</ImagesCarousel>
			</section>
			<section className='testimonials'>
				<h2 className='testimonials__title heading-text'>
					What Pet Owners Say
				</h2>
				<ul className='testimonials__list'>
					<li className='testimonials__item'>
						<p className='testimonials__subtitle'>"Exceptional Care"</p>
						<p className='testimonials__text'>
							Anyone close to us knows that our world revolves around our pup
							Olive. Luckily, when we adopted her from the foundation, we
							connected with Alex and Kelli, both of whom already had a
							relationship with her. We know when Olive gets her visits and
							walks from Alex and Kelli, she is thoroughly being looked after
							and treated like she’s one of their own. We couldn’t find more
							experienced and professional caretakers if we tried. For anyone
							who needs exceptional care and love for their dog, we 100%
							recommend Alex and Kelli!
						</p>
						<div className='testimonials__author'>
							<img
								src={JennyAlexReviewImage}
								alt=''
								className='testimonials__author-image'
							/>
							<p className='testimonials__author-name'>Jenny + Alex</p>
						</div>
					</li>
					<li className='testimonials__item'>
						<p className='testimonials__subtitle'>"Happy dog-self"</p>
						<p className='testimonials__text'>
							I trust Alex & Kelli with my fur-baby 100%. Without them, I don’t
							think I would ever go on vacation or see my family lol. First of
							all, they love all animals. They’ve shown this through fostering
							and their volunteer work with numerous organizations. They treat
							Oogie as if he were theirs. He’s never locked in a cage/room, he
							is free to wander about like his independent, happy dog-self.
						</p>
						<div className='testimonials__author'>
							<img
								src={ShastaReviewImage}
								alt=''
								className='testimonials__author-image'
							/>
							<p className='testimonials__author-name'>Shasta</p>
						</div>
					</li>
					<li className='testimonials__item'>
						<p className='testimonials__subtitle'>"So damn reliable"</p>
						<p className='testimonials__text'>
							Kelli & Alex are downright the best and I admire how much love
							they have for all animals, not just our sweet little guy. They
							care for our dog as if he is their own and somehow have time for
							other clients, dog rescuing, fostering and volunteering. I;m happy
							to report that they are always on time and have never missed a
							walk or visit when we have them in the books. If anything, we're
							the unreliable ones and they are always so patient with us! HAHAHA
							This is the easiest testimonial to write because they are so damn
							reliable, trustworthy, loving and so good at what they do!
						</p>
						<div className='testimonials__author'>
							<img
								src={StaceyJasonReviewImage}
								alt=''
								className='testimonials__author-image'
							/>
							<p className='testimonials__author-name'>Stacey + Jason</p>
						</div>
					</li>
				</ul>
				<a href='/reviews.html' className='button button_color_transparent'>
					All Reviews
				</a>
			</section>
		</main>
	);
};

export default Home;
