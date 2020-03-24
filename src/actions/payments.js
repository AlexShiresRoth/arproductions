import { CHARGE } from './types';
import axios from 'axios';

export const sendPayment = ({ title, desc, price }) => async dispatch => {
	const config = {
		accept: 'application/json',
		headers: { 'Content-Type': `application/json` },
	};
	console.log(title, desc, price);
	const res = await axios.post('/payments/', {
		config,
		title,
		price,
		desc,
		email: 'alex@alexshiresroth.com',
		source: '11111',
		cardElement: '123456789',
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
