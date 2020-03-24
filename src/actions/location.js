import { GET_LOCATION } from './types';

export const getLocation = location => async dispatch => {
	dispatch({
		type: GET_LOCATION,
		payload: location,
	});
};
