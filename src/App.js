import React from 'react';
import './css/main.css';
import Home from './components/layout/Home';
import Store from './components/store/Store';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Switch } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store';

const stripePromise = loadStripe('pk_test_Jna8Q4gbVOZxEMpVCDPdT6160041FZDtEe');

const history = createBrowserHistory();

function App() {
	return (
		<Provider store={store}>
			<HashRouter history={history}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Elements stripe={stripePromise}>
						<Route exact path="/store" history={history} component={Store} />
					</Elements>
				</Switch>
			</HashRouter>
		</Provider>
	);
}

export default App;
