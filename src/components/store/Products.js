import React from 'react';
import PropTypes from 'prop-types';
import productStyle from './Products.module.scss';

const Products = ({ products, order }) => {
	const productsMap = products.map((item, i) => {
		return (
			<div className={productStyle.item}>
				<p>{item.title}</p>
				<p>{item.price}</p>
				<button onClick={e => order(item)}>Checkout</button>
			</div>
		);
	});
	return (
		<section className={productStyle.section}>
			<div className={productStyle.heading}>
				<h2>AlexRoth productions' Products</h2>
			</div>
			<div className={productStyle.grid}>{productsMap}</div>
		</section>
	);
};

Products.propTypes = {
	products: PropTypes.object.isRequired,
	order: PropTypes.func.isRequired,
};

export default Products;
