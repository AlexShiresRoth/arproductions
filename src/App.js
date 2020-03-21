import React from 'react';
import './css/main.css';
import Home from './components/layout/Home';
import Store from './components/store/Store';
import { HashRouter, Route, Switch } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/store" component={Store} />
				</Switch>
			</HashRouter>
		</Provider>
	);
}

export default App;
