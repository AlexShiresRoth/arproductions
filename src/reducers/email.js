import { SEND_CONFIRMATION } from '../actions/types';

const initialState = {
	email: null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SEND_CONFIRMATION:
			return {
				...state,
				sent: payload,
			};
		default:
			return state;
	}
};
