import React from 'react';
import Nav from '../nav/Nav';
import Cookie from '../popup/Cookie';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
const Layout = ({ children }) => {
	return (
		<main>
			<Nav />
			{children}
			<Cookie />
			<Contact />
			<Footer />
		</main>
	);
};

export default Layout;
