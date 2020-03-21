import { CHARGE } from './types';
import axios from 'axios';

import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';

export const sendPayment = ({ price, item, stripe }) => async dispatch => {
	const config = {
		accept: 'application/json',
		headers: { 'Content-Type': `application/json` },
	};
	const { token } = await stripe.createToken();

	const res = await axios.post('/payments/', config, {
		price,
		item,
		email: 'alex@alexshiresroth.com',
		source: token,
	});

	try {
		dispatch({
			type: CHARGE,
			payload: res.data,
		});
	} catch (error) {
		console.error(error);
	}
};
