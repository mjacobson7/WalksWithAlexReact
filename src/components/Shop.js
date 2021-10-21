import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Shop = () => {
	const { fetchAllProducts, products } = useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	if (!products.length > 0) return <Loading />;
	return (
		<>
			<div className='shop'>
				{products.map((product) => (
					<Link
						className='shop__product'
						key={product.id}
						to={`/shop/${product.id}`}>
						<div p='2rem'>
							<img
								className='shop__product-image'
								src={product.images[0].src}
								alt={product.title}
							/>
							<p className='shop__title'>{product.title}</p>
							<p className='shop__price'>${product.variants[0].price}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Shop;
