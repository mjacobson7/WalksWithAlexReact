import React from 'react';

import AlexImage from '../images/about_alex.png';
import KelliImage from '../images/about_kelli.webp';

const About = () => {
	return (
		<main className='page'>
			<h1 className='page__title heading-text'>Meet the Team</h1>
			<section className='about'>
				<div className='about__section'>
					<img
						src={AlexImage}
						alt='Alex & Kelli Jacobson with their furry friends'
						className='about__photo'
					/>
					<h2 className='about__title about__title_size_small heading-text'>
						Alex
					</h2>
					<p className='about__text paragraph-text'>
						Alex has worked with dogs professionally since 2018 when he began
						his career as a professional dog walker. Driven by a desire to
						improve the life of dogs he began volunteering with various animal
						rescues in the los angeles area. During that time he has learned to
						work with dogs of varying ages/temperaments/medical conditions/etc.
						Alex has a strong desire to learn and is always looking for
						opportunities to grow his knowledge about dogs and dog behavior. He
						has compassion for all animals but a special place in his heart for
						dogs that have difficulty communicating their needs and need extra
						patience and understanding.
					</p>
				</div>
				<div className='about__section about__section_reversed'>
					<img
						src={KelliImage}
						alt='Alex & Kelli Jacobson with their furry friends'
						className='about__photo'
					/>
					<h2 className='about__title about__title_size_small heading-text'>
						Kelli
					</h2>
					<p className='about__text paragraph-text'>
						Kelli grew up rescuing animals of all sizes. She was known in her
						neighborhood as the animal search and rescue expert and learned to
						communicate with animals and gain their trust. She began
						volunteering at a local animal rescue where she realized how much
						her knowledge and experience could help dogs in need. Kelli has
						continued to help rehabilitate rescue dogs. When she is not actively
						working with client dogs, she is the Director of Operations for a
						Los Angeles 501c3 animal rescue. Kelli is incredibly grateful to be
						working in a field that she is passionate about and doing so
						alongside her husband, Alex.
					</p>
				</div>
			</section>
		</main>
	);
};

export default About;
