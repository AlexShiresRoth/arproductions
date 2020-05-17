import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav/Nav';
import Cookie from '../popup/Cookie';
const Layout = ({ children }) => {
	return (
		<main>
			<Nav />
			{children}
			<Cookie />
		</main>
	);
};

Layout.propTypes = {};

export default Layout;
