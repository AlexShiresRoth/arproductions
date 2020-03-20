import { ADD_REF } from '../actions/types';

const initialState = {
	refs: [],
};

export default (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case ADD_REF:
			return {
				...state,
				refs: [...state.refs, payload],
			};
		default:
			return state;
	}
};
