import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import {
	StripeProvider,
	Elements,
	CardNumberElement,
	CardExpiryElement,
	CardCVCElement,
	injectStripe,
} from 'react-stripe-elements';
import { sendPayment } from '../../actions/payments';
import { connect } from 'react-redux';

const Store = ({ sendPayment }) => {
	const products = [
		{ title: 'Basic Template', price: '10.00', desc: 'A simple, dynamic template built with react/redux' },
	];

	const order = ({ price, title }) => {
		sendPayment(price, title);
	};

	const productsMap = products.map((item, i) => {
		return (
			<>
				<p>{item.title}</p>
				<p>{item.price}</p>
				<button onClick={e => order(item)}>Checkout</button>
			</>
		);
	});
	return (
		<StripeProvider apiKey="pk_test_Jna8Q4gbVOZxEMpVCDPdT6160041FZDtEe">
			<Elements>
				<Layout>{productsMap}</Layout>
			</Elements>
		</StripeProvider>
	);
};

Store.propTypes = {};

const mapStateToProps = state => {
	return {
		charge: state.charge,
	};
};
export default connect(mapStateToProps, { sendPayment })(Store);
