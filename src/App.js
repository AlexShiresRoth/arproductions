import React from 'react';
import './css/main.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<main>
				<Nav />
				<Header />
				<Services />
				<Work />
				<Contact />
				<Footer />
			</main>
		</Provider>
	);
}

export default App;
