import React, { useEffect } from 'react';
import Header from '../home/header/Header';
import Services from '../home/services/Services';
import Work from '../home/work/Work';
import Layout from '../layout/Layout';
import Packages from '../home/packages/Packages';

const Home = () => {
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0 });
		}, 300);

		return () => clearTimeout();
	}, []);
	return (
		<Layout>
			<Header />
			<Services />
			<Packages />
			<Work />
		</Layout>
	);
};

export default Home;
