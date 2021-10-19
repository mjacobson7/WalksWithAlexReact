import React, { useEffect, useContext, useState, useCallback } from 'react';
import { useParams } from 'react-router';
import { ShopContext } from '../context/ShopContext';
import Select from './Select';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
	const { id } = useParams();
	const { fetchProductWithId, addItemToCheckout, product, openCart } =
		useContext(ShopContext);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [selectOptions, setSelectOptions] = useState(null);
	const [selectedVariant, setSelectedVariant] = useState(null);

	useEffect(() => {
		fetchProductWithId(id);
		return () => {};
	}, [fetchProductWithId, id]);

	const handleSelectedVariant = useCallback(
		(selectedOptions) => {
			const selectedVariant = product.variants.find((variant) => {
				return variant.selectedOptions.every((selectedOption) => {
					return selectedOptions[selectedOption.name] === selectedOption.value;
				});
			});

			console.log(selectedVariant);
			setSelectedVariant(selectedVariant);
		},
		[product.variants]
	);

	useEffect(() => {
		if (product.options) {
			const selectedOptionsObj = product.options.reduce((prev, curr, i) => {
				prev[curr.name] = curr.values[0].value;
				return prev;
			}, {});
			console.log(selectedOptionsObj);
			setSelectOptions(selectedOptionsObj);
			handleSelectedVariant(selectedOptionsObj);
		}
	}, [handleSelectedVariant, product]);

	const handleSelectChange = (e) => {
		const target = e.target;
		const selectedOptions = selectOptions;
		selectedOptions[target.name] = target.value;
		handleSelectedVariant(selectedOptions);
	};

	const handleAddToCheckout = () => {
		addItemToCheckout(product.variants[0].id, 1);

		toast('Item added to cart!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			progress: undefined,
			type: 'success',
		});
	};

	if (!product.title) return <div>Loading...</div>;
	return (
		<>
			<div className='product'>
				<div className='product__images'>
					<img
						src={product.images[currentImageIndex].src}
						alt=''
						className='product__image'
					/>
					<div className='product__thumbnails'>
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
				</div>
				<div className='product__details'>
					<h1 className='product__title'>{product.title}</h1>
					<p className='product__price'>${product.variants[0].price}</p>
					<p className='product__description'>{product.description}</p>
					{product.options.map((option) => (
						<Select
							key={option.id}
							name={option.name}
							handleSelectChange={handleSelectChange}
							label={option.name}
							options={option}></Select>
					))}
					<button
						className={`button button_color_transparent ${
							!selectedVariant?.available ? 'button_disabled' : ''
						}`}
						disabled={!selectedVariant?.available}
						onClick={handleAddToCheckout}>
						Add To Cart
					</button>
					<button onClick={openCart}>Open Cart</button>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Product;
