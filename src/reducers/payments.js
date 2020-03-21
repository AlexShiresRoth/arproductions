import { CHARGE } from '../actions/types';

const initialState = {
	charge: null,
	loading: true,
};

export default (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case CHARGE:
			return {
				...state,
				charge: payload,
				loading: false,
			};
		default:
			return state;
	}
};
