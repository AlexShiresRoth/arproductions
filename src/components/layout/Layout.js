import React from 'react';
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

export default Layout;
