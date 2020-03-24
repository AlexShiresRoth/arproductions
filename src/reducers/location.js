import { GET_LOCATION } from '../actions/types';

const initialState = {
	location: '',
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_LOCATION:
			return {
				...state,
				location: payload,
			};
		default:
			return state;
	}
};
