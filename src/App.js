import React from 'react';
import './css/main.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Work from './components/work/Work';

function App() {
	return (
		<main>
			<Nav />
			<Header />
			<Services />
			<Work />
		</main>
	);
}

export default App;
