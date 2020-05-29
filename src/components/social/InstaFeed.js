import React from 'react';
import PropTypes from 'prop-types';

const InstaFeed = (props) => {
	return (
		<div>
			<div
				className="fb-login-button"
				data-size="medium"
				data-button-type="continue_with"
				data-layout="default"
				data-auto-logout-link="false"
				data-use-continue-as="false"
				data-width=""
			></div>
		</div>
	);
};

InstaFeed.propTypes = {};

export default InstaFeed;
