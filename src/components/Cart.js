import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { isCartOpen, closeCart, checkout, removeItemFromCheckout } =
		useContext(ShopContext);

	const handleRemoveItem = (e, id) => {
		e.preventDefault();
		removeItemFromCheckout(id);
	};

	return (
		<div className={`cart ${isCartOpen ? 'cart_visible' : ''}`}>
			<div className='cart__overlay' onClick={closeCart}></div>
			<div
				className={`cart__contents ${
					isCartOpen ? 'cart__contents_visible' : ''
				}`}>
				<p className='cart__title'>Cart</p>
				<FontAwesomeIcon
					className='cart__close'
					icon={faTimes}
					onClick={closeCart}
				/>
				<div className='cart__items'>
					{checkout.lineItems && checkout.lineItems.length > 0 ? (
						checkout.lineItems.map((item) => (
							<div key={item.id} className='cart__item'>
								<img
									className='cart__item-image'
									src={item.variant.image.src}
									alt=''
								/>
								<div>
									<p className='cart__item-title'>{item.title}</p>
									<p className='cart__variant-title'>{item.variant.title}</p>
									<p className='cart__quantity'>Quantity: {item.quantity}</p>
									<Link to='/' onClick={(e) => handleRemoveItem(e, item.id)}>
										Remove
									</Link>
								</div>
								<p className='cart__item-price'>${item.variant.price}</p>
							</div>
						))
					) : (
						<p>Cart is Empty</p>
					)}
				</div>
				{checkout.lineItems && checkout.lineItems.length > 0 && (
					<a
						href={checkout.webUrl}
						target='_blank'
						className='cart__checkout button button_color_yellow'
						rel='noreferrer'>
						Checkout
					</a>
				)}
			</div>
		</div>
		// <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
		// 	<Div d='flex' flexDir='column' m={{ b: '4rem' }}>
		// 		{checkout.lineItems &&
		// 			checkout.lineItems.map((item) => (
		// 				<Row key={item.id}>
		// 					<Col>
		// 						<Div
		// 							bgImg={item.variant.image.src}
		// 							bgSize='cover'
		// 							bgPos='center center'
		// 							h='5rem'
		// 							w='4rem'
		// 						/>
		// 					</Col>
		// 					<Col>
		// 						<Text>{item.title}</Text>
		// 						<Text>{item.variant.title}</Text>
		// 						<Text>{item.quantity}</Text>
		// 					</Col>
		// 					<Col>
		// 						<Text>{item.variant.price}</Text>
		// 					</Col>
		// 				</Row>
		// 			))}
		// 		<Anchor href={checkout.webUrl} target='_blank'>
		// 			Checkout
		// 		</Anchor>
		// 	</Div>
		// </SideDrawer>
	);
};

export default Cart;
