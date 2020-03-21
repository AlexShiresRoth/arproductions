import React from 'react';
import Header from '../header/Header';
import Services from '../services/Services';
import Work from '../work/Work';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Layout from './Layout';
const Home = () => {
	return (
		<Layout>
			<Header />
			<Services />
			<Work />
			<Contact />
			<Footer />
		</Layout>
	);
};

export default Home;
