import React from 'react';
import './css/main.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
function App() {
	return (
		<main>
			<Nav />
			<Header />
			<Services />
			<Work />
			<Contact />
		</main>
	);
}

export default App;
