import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import socialFacebook from '../images/social_facebook.png';
import socialInstagram from '../images/social_instagram.png';

import MobileHeaderMenu from './MobileHeaderMenu';

const Header = () => {

	return (
		<header className='header'>
			<div className='header__logo-container'>
				<Link className='header__title heading-text' to='/'>
					Walks With Alex
				</Link>
				<div className='header__social-container'>
					<a
						className='header__social-link'
						href='https://www.facebook.com/DogWalksWithAlex'
						target='_blank'
						rel='noreferrer'>
						<img src={socialFacebook} alt='' />
					</a>
					<a
						className='header__social-link'
						href='https://www.instagram.com/walkswithalex/'
						target='_blank'
						rel='noreferrer'>
						<img src={socialInstagram} alt='' />
					</a>
				</div>
			</div>
			<nav className='header__menu header__menu_desktop'>
				<NavLink
					className='header__menu-item paragraph-text'
					activeClassName='header__menu-item_active'
					exact
					to='/'>
					Home
				</NavLink>
				<NavLink
					className='header__menu-item paragraph-text'
					activeClassName='header__menu-item_active'
					to='/about'>
					About
				</NavLink>
				<NavLink
					className='header__menu-item paragraph-text'
					activeClassName='header__menu-item_active'
					to='/services'>
					Services
				</NavLink>
				<NavLink
					className='header__menu-item paragraph-text'
					activeClassName='header__menu-item_active'
					to='/reviews'>
					Reviews
				</NavLink>
				<NavLink
					className='header__menu-item paragraph-text'
					activeClassName='header__menu-item_active'
					to='/rescue'>
					Rescue
				</NavLink>
				<NavLink
					className='header__menu-item paragraph-text'
					activeClassName='header__menu-item_active'
					to='/faq'>
					FAQ
				</NavLink>
				<NavLink
					className='header__menu-item paragraph-text'
					activeClassName='header__menu-item_active'
					to='/shop'>
					Shop
				</NavLink>
				<a
					// activeClassName='header__menu-item_active' // Won't ever be active since it currently redirects to square
					className='header__menu-item paragraph-text'
					// to='/shop'
					href='https://walkswithalex.square.site/'>
					Shop
				</a>
				<FontAwesomeIcon
					className='header__menu-item header__cart'
					icon={faShoppingCart}
					// onClick={openCart}
				/>
				<a
					href='mailto:info@walkswithalex.com'
					target='_blank'
					className='header__menu-item button button_color_yellow'
					rel='noreferrer'>
					Email Us
				</a>
			</nav>
			<MobileHeaderMenu />
		</header>
	);
};

export default Header;
