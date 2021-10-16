import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
	storefrontAccessToken: '3648ea97fb1a6ea51d6a92e7e8109658',
	domain: 'walks-with-alex.myshopify.com',
});

class ShopProvider extends Component {
	state = {
		products: [],
		product: {},
		checkout: {},
		isCartOpen: false,
		test: 'test',
	};

	componentDidMount() {
		// this.fetchAllProducts();
		this.createCheckout();
	}

	createCheckout = async () => {
		const checkout = await client.checkout.create();
		this.setState({ checkout });
	};

	addItemToCheckout = async (variantId, quantity) => {
		const lineItemsToAdd = [
			{
				variantId,
				quantity: parseInt(quantity, 10),
			},
		];

		const checkout = await client.checkout.addLineItems(
			this.state.checkout.id,
			lineItemsToAdd
		);
		this.setState({ checkout });
	};

	fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		this.setState({ products });
	};

	fetchProductWithId = async (id) => {
		const product = await client.product.fetch(id);
		this.setState({ product });
	};

	closeCart = async () => {
		this.setState({ isCartOpen: false });
	};

	openCart = async () => {
		this.setState({ isCartOpen: true });
	};

	render() {
		return (
			<ShopContext.Provider
				value={{
					...this.state,
					fetchAllProducts: this.fetchAllProducts,
					fetchProductWithId: this.fetchProductWithId,
					closeCart: this.closeCart,
					openCart: this.openCart,
					addItemToCheckout: this.addItemToCheckout,
				}}>
				{this.props.children}
			</ShopContext.Provider>
		);
	}
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;