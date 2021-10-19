import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
	const { id } = useParams();
	const { fetchProductWithId, addItemToCheckout, product, openCart } =
		useContext(ShopContext);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		fetchProductWithId(id);
		return () => {};
	}, [fetchProductWithId, id]);

	if (!product.title) return <div>Loading...</div>;
	return (
		<div className='product'>
			<div className='product__images'>
				<img
					src={product.images[currentImageIndex].src}
					alt=''
					className='product__image'
				/>
				{product.images.map((image, idx) => (
					<img
						className={`product__image product__image_small ${
							currentImageIndex === idx ? 'product__image_active' : ''
						}`}
						key={image.id}
						src={image.src}
						alt=''
						onClick={() => setCurrentImageIndex(idx)}
					/>
				))}
			</div>
			<div className='product__details'>
				<h1 className='product__title'>{product.title}</h1>
				<p className='product__price'>${product.variants[0].price}</p>
				<p className='product__description'>{product.description}</p>
				<button
					className='button button_color_transparent'
					onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
					Add To Cart
				</button>
			</div>
		</div>

		// 	<Button onClick={openCart}>Open Cart</Button>
	);
};

export default Product;
