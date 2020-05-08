import React, { useEffect } from 'react';
import Header from '../header/Header';
import Services from '../services/Services';
import Work from '../work/Work';
import Game from '../game/Game';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Layout from './Layout';
import { getLocation } from '../../actions/location';
import { connect } from 'react-redux';
import ModelRender from '../modeling/ModelRender';

const Home = ({ history, getLocation }) => {
	useEffect(() => {
		getLocation(history.location.pathname);
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 1000);
	}, [getLocation, history]);

	return (
		<Layout>
			<Header />
			<Services />
			<Work />
			<ModelRender />
			<Game />
			<Contact />
			<Footer />
		</Layout>
	);
};

const mapStateToProps = (state) => {
	return {
		location: state.location,
	};
};

export default connect(mapStateToProps, { getLocation })(Home);
