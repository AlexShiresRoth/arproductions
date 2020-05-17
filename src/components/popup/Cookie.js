import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cookieStyle from './Cookie.module.scss';
import { giveOrDenyConsent } from '../../actions/cookies';
import { connect } from 'react-redux';
const Cookie = ({ giveOrDenyConsent }) => {
	const [consent, setConsentState] = useState(localStorage.getItem('consent') === 'true');
	const [declined, setDecline] = useState(false);
	useEffect(() => {
		giveOrDenyConsent(consent);
	}, [consent, giveOrDenyConsent]);

	useEffect(() => {
		if (declined) {
			setTimeout(() => {
				setDecline(false);
			}, 20000);
		}
	}, [declined]);
	console.log(declined);
	return !consent && !declined ? (
		<div className={cookieStyle.popup}>
			<p>
				We use cookies and other tracking technologies to analyze our website traffic, and to understand where
				our visitors are coming from. By browsing our website, you consent to our use of cookies and other
				tracking technologies.
			</p>
			<div>
				<button onClick={() => setConsentState(true)}>Accept</button>
				<button
					onClick={() => {
						setConsentState(false);
						setDecline(true);
					}}
				>
					Decline
				</button>
			</div>
		</div>
	) : null;
};

Cookie.propTypes = {
	giveOrDenyConsent: PropTypes.func.isRequired,
};

export default connect(null, { giveOrDenyConsent })(Cookie);
