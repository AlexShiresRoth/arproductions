import { ADD_REF } from './types';

export const addRef = ref => async dispatch => {
	dispatch({
		type: ADD_REF,
		payload: ref,
	});
};
