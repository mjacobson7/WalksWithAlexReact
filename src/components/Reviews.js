import React from 'react';
import { Link } from 'react-router-dom';
import JennyAlexImage from '../images/jenny_alex_review.png';
import ShastaImage from '../images/shasta_review.png';
import StaceyJasonImage from '../images/stacey_jason_review.png';
const Reviews = () => {
	return (
		<main>
			<section className='testimonials'>
				<h2 className='testimonials__title heading-text'>Reviews</h2>
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
								src={JennyAlexImage}
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
								src={ShastaImage}
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
								src={StaceyJasonImage}
								alt=''
								className='testimonials__author-image'
							/>
							<p className='testimonials__author-name'>Stacey + Jason</p>
						</div>
					</li>
				</ul>
				<Link
					to={{
						pathname: 'https://g.page/walks-with-alex/review?gm',
					}}
					target='_blank'
					className='card__btn button button_color_yellow'>
					Leave a review!
				</Link>
			</section>
		</main>
	);
};

export default Reviews;
