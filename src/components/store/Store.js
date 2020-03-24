import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import Products from './Products';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { sendPayment } from '../../actions/payments';
import { getLocation } from '../../actions/location';
import { connect } from 'react-redux';

const Store = ({ sendPayment, history, getLocation }) => {
	const stripe = useStripe();
	const elements = useElements();

	const products = [
		{ title: 'Basic Template', price: 100, desc: 'A simple, dynamic template built with react/redux', id: '34525' },
		{ title: 'Basic Template', price: 100, desc: 'A simple, dynamic template built with react/redux', id: '34525' },
		{ title: 'Basic Template', price: 100, desc: 'A simple, dynamic template built with react/redux', id: '34525' },
	];

	const order = item => {
		sendPayment(item);
	};

	useEffect(() => {
		getLocation(history.location.pathname);
	}, [history, getLocation]);

	return (
		<Layout>
			<Products products={products} order={order} />
		</Layout>
	);
};

Store.propTypes = { sendPayment: PropTypes.func.isRequired };

const mapStateToProps = state => {
	return {
		charge: state.charge,
		loaction: state.loaction,
	};
};
export default connect(mapStateToProps, { sendPayment, getLocation })(Store);
