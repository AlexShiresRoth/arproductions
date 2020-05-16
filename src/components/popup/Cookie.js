import React from 'react';
import PropTypes from 'prop-types';
import cookieStyle from './Cookie.module.scss';

const Cookie = (props) => {
	return (
		<div>
			<p>
				We use cookies and other tracking technologies to analyze our website traffic, and to understand where
				our visitors are coming from. By browsing our website, you consent to our use of cookies and other
				tracking technologies.
			</p>
			<button>Accept</button>
			<button>Decline</button>
		</div>
	);
};

Cookie.propTypes = {};

export default Cookie;
