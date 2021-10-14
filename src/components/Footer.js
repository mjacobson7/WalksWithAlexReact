import React from 'react';
import { Link } from 'react-router-dom';
import fearFreeImage from '../images/certification_fear_free.webp';
import iaabcImage from '../images/certification_iaabc.webp';
import recallerImage from '../images/certification_recaller.webp';
import redCrossImage from '../images/certification_red_cross.webp';
import apdtImage from '../images/certification_apdt.webp';
import ContactForm from './ContactForm';

const Footer = () => {
	return (
		<footer className='footer'>
			<ul className='certifications'>
				<li>
					<Link to='https://fearfreepets.com/' target='_blank'>
						<img src={fearFreeImage} alt='' className='certifications__image' />
					</Link>
				</li>
				<li>
					<Link to='https://iaabc.org/' target='_blank'>
						<img src={iaabcImage} alt='' className='certifications__image' />
					</Link>
				</li>
				<li>
					<Link to='https://recallers.com/' target='_blank'>
						<img src={recallerImage} alt='' className='certifications__image' />
					</Link>
				</li>
				<li>
					<Link
						to='https://www.redcross.org/take-a-class/first-aid/cat-dog-first-aid'
						target='_blank'>
						<img src={redCrossImage} alt='' className='certifications__image' />
					</Link>
				</li>
				<li>
					<Link to='https://apdt.com/' target='_blank'>
						<img src={apdtImage} alt='' className='certifications__image' />
					</Link>
				</li>
			</ul>
			<h2 className='footer__title heading-text'>Contact</h2>
			<ul className='footer__contact-list'>
				<li className='footer__contact-item'>
					<p className='footer__subtitle'>Phone</p>
					<p className='footer__text'>(818) 794-0753</p>
				</li>
				<li className='footer__contact-item'>
					<p className='footer__subtitle'>Email</p>
					<p className='footer__text'>info@walkswithalex.com</p>
				</li>
				<li className='footer__contact-item'>
					<p className='footer__subtitle'>Hours of Operation</p>
					<p className='footer__text'>Monday - Sunday</p>
					<p className='footer__text'>6am - 6pm</p>
				</li>
				<li className='footer__contact-item'>
					<p className='footer__subtitle'>Area of Service</p>
					<p className='footer__text'>San Fernando Valley</p>
				</li>
			</ul>
			<ContactForm />
		</footer>
	);
};

export default Footer;
