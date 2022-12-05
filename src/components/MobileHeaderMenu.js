import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MobileHeaderMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		// if (isMenuOpen || isCartOpen) {
			if(isMenuOpen) {
			document.querySelector('html').style.overflow = 'hidden';
		} else {
			document.querySelector('html').style.overflow = 'auto';
		}
	// }, [isCartOpen, isMenuOpen]);
	}, []);

	const handleCartClick = (e) => {
		e.preventDefault();
		// openCart();
		setIsMenuOpen(false);
	};

	return (
		<div className='header__menu header__menu_mobile'>
			{!isMenuOpen && (
				<FontAwesomeIcon
					className='header__menu-icon header__menu-icon_open'
					icon={faBars}
					onClick={() => setIsMenuOpen(true)}
				/>
			)}
			{isMenuOpen && (
				<FontAwesomeIcon
					className='header__menu-icon header__menu-icon_close'
					icon={faTimes}
					onClick={() => setIsMenuOpen(false)}
				/>
			)}
			{isMenuOpen && (
				<div className='header__mobile-nav-container'>
					<nav className='header__mobile-nav'>
						<NavLink
							activeClassName='header__menu-item_active'
							className='header__mobile-item'
							to='/'
							exact={true}
							onClick={() => setIsMenuOpen(false)}>
							Home
						</NavLink>
						<NavLink
							activeClassName='header__menu-item_active'
							className='header__mobile-item'
							to='/about'
							onClick={() => setIsMenuOpen(false)}>
							About
						</NavLink>
						<NavLink
							activeClassName='header__menu-item_active'
							className='header__mobile-item'
							to='/services'
							onClick={() => setIsMenuOpen(false)}>
							{' '}
							Services{' '}
						</NavLink>
						<NavLink
							activeClassName='header__menu-item_active'
							className='header__mobile-item'
							to='/reviews'
							onClick={() => setIsMenuOpen(false)}>
							{' '}
							Reviews{' '}
						</NavLink>
						<NavLink
							activeClassName='header__menu-item_active'
							className='header__mobile-item'
							to='/rescue'
							onClick={() => setIsMenuOpen(false)}>
							Rescue{' '}
						</NavLink>
						<NavLink
							activeClassName='header__menu-item_active'
							className='header__mobile-item'
							to='/faq'
							onClick={() => setIsMenuOpen(false)}>
							FAQ
						</NavLink>
						<a
							// activeClassName='header__menu-item_active' // Won't ever be active since it currently redirects to square
							className='header__mobile-item'
							// to='/shop'
							href='https://walkswithalex.square.site/'
							onClick={() => setIsMenuOpen(false)}>
							Shop
						</a>
				
						<a
							href='mailto:info@walkswithalex.com'
							target='_blank'
							className='header__mobile-item'
							onClick={() => setIsMenuOpen(false)}
							rel='noreferrer'>
							Email Us
						</a>
					</nav>
				</div>
			)}
		</div>
	);
};

export default MobileHeaderMenu;
