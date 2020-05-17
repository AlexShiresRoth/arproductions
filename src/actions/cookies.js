import { COOKIE_CONSENT } from './types';

export const giveOrDenyConsent = (consent) => async (dispatch) => {
	localStorage.setItem('consent', consent);

	dispatch({
		type: COOKIE_CONSENT,
		payload: consent,
	});
};
