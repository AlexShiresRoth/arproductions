import React, { useEffect, useState } from 'react';
import './css/main.css';
import Home from './components/layout/Home';
import Store from './components/store/Store';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { gql } from 'apollo-boost';
import { buildUrl } from 'react-instafeed';
import ReactGA from 'react-ga';
//Redux
import { Provider } from 'react-redux';
import store from './store';

const stripePromise = loadStripe('pk_test_Jna8Q4gbVOZxEMpVCDPdT6160041FZDtEe');

const history = createBrowserHistory();

ReactGA.initialize('UA-166880304-1');
ReactGA.pageview('/');

const link = createHttpLink({
	uri: `https://api.instagram.com/v1/self/media/recent?access_token=0ecb312467b80f508f1d23cd6b7647bf`,
	credentials: 'same-origin',
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link,
});

// client
// 	.query({
// 		query: gql`
// 			{
//
// 			}
// 		`,
// 	})
// 	.then((result) => console.log(result));

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Elements stripe={stripePromise}>
						<Route exact path="/store" history={history} component={Store} />
					</Elements>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
