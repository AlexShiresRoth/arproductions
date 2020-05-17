import { SEND_CONFIRMATION } from './types';
import axios from 'axios';

export const sendConfirmation = (formData) => async (dispatch) => {
	await axios({
		method: 'POST',
		url: `https://asrserver.herokuapp.com/api/arproductions/send-email/confirm`,
		data: {
			headers: {
				'Access-Control-Allow-Origin': 'http://localhost:3000/',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			...formData,
		},
	})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			const errMsg = JSON.stringify(err);
			console.error(JSON.parse(errMsg).message);
		});

	dispatch({
		type: SEND_CONFIRMATION,
		payload: formData,
	});
};
