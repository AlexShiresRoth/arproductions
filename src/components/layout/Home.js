import React, { useEffect } from 'react';
import Header from '../header/Header';
import Services from '../services/Services';
import Work from '../work/Work';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Layout from './Layout';
import { getLocation } from '../../actions/location';
import { connect } from 'react-redux';

const Home = ({ history, getLocation }) => {
	useEffect(() => {
		getLocation(history.location.pathname);
	}, [getLocation, history]);

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

const mapStateToProps = state => {
	return {
		location: state.location,
	};
};

export default connect(mapStateToProps, { getLocation })(Home);
