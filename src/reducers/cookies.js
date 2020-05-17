import { COOKIE_CONSENT } from '../actions/types';

const initialState = {
	consent: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case COOKIE_CONSENT:
			return {
				...state,
				consent: payload,
			};
		default:
			return state;
	}
};
