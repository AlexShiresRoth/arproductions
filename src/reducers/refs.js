import { ADD_REF, ADD_ACTIVE } from '../actions/types';

const initialState = {
	refs: [],
	active: '',
};

export default (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case ADD_REF:
			return {
				...state,
				refs: [payload, ...state.refs],
			};
		case ADD_ACTIVE:
			return {
				...state,
				//need to fix, only sort of works
				// active: payload,
				active: '',
			};
		default:
			return state;
	}
};
