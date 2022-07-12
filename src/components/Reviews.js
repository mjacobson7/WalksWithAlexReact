import React from 'react';
import { Link } from 'react-router-dom';
import JennyAlexImage from '../images/jenny_alex_review.png';
import ShastaImage from '../images/shasta_review.webp';
import StaceyJasonImage from '../images/stacey_jason_review.png';
import ShaziImage from '../images/review_shazi.webp';
import JasonKimImage from '../images/jason_kim_review.jpeg';
import BethTaylorImage from '../images/beth_tyler_review.jpeg';
import KimImage from '../images/kim_review.jpeg';

const Reviews = () => {
	return (
		<main>
			<section className='testimonials'>
				<h2 className='testimonials__title heading-text'>Reviews</h2>
				<Link
					to={{
						pathname: 'https://g.page/walks-with-alex/review?gm',
					}}
					target='_blank'
					className='card__btn button button_color_yellow'>
					Leave a review!
				</Link>
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
					<li className='testimonials__item'>
						<p className='testimonials__subtitle'>
							"Loving, attentive, and stimulating care"
						</p>
						<p className='testimonials__text'>
							When you are anxious to leave your dog…but are thrilled to see how
							excited he is to come here!! Loving, attentive, and stimulating
							care—thank you!
						</p>
						<div className='testimonials__author'>
							<img
								src={ShaziImage}
								alt=''
								className='testimonials__author-image'
							/>
							<p className='testimonials__author-name'>Shazi</p>
						</div>
					</li>
					<li className='testimonials__item'>
						<p className='testimonials__subtitle'>"They're the best!"</p>
						<p className='testimonials__text'>
							Alex & Kelli are AMAZING and always do a fantastic job with
							watching & caring for our pups! Our dogs love them and are always
							so happy, well cared for & loved - I always give them my highest
							recommendations! They're the best!
						</p>
						<div className='testimonials__author'>
							<img
								src={JasonKimImage}
								alt=''
								className='testimonials__author-image'
							/>
							<p className='testimonials__author-name'>Jason + Kim</p>
						</div>
					</li>
					<li className='testimonials__item'>
						<p className='testimonials__subtitle'>
							"Thank-you for all you do!"
						</p>
						<p className='testimonials__text'>
							We cannot recommend Walks with Alex enough! You can always trust
							that your pet will be in the best of care while you're away. And
							you'll be able to see it in the photos shared! Alex and Kelli,
							thank-you for all you do!
						</p>
						<div className='testimonials__author'>
							<img
								src={BethTaylorImage}
								alt=''
								className='testimonials__author-image'
							/>
							<p className='testimonials__author-name'>Beth + Tyler</p>
						</div>
					</li>
					<li className='testimonials__item'>
						<p className='testimonials__subtitle'>
							"Would recommend to everyone"
						</p>
						<p className='testimonials__text'>
							Trustworthy and friendly dog boarding! My dog takes a lot of
							medication and is on a strict prescription diet. His health issues
							make him tough to care for, as he needs a lot of attention
							throughout the day (more than average water, bathroom trips,
							frequent meds/feedings). Alex and Kelli did an AMAZING job of
							catering to him and sent frequent updates so we knew he was
							getting the care he needs (and having fun!). Would recommend to
							everyone, we’re sooo excited to find dog sitters we can trust
						</p>
						<div className='testimonials__author'>
							<img
								src={KimImage}
								alt=''
								className='testimonials__author-image'
							/>
							<p className='testimonials__author-name'>Kim</p>
						</div>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default Reviews;
