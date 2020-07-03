import React from 'react';
import './css/main.css';
import Home from './components/pages/Home';
import Store from './components/store/Store';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import GameDev from './components/pages/GameDev';

const history = createBrowserHistory();

ReactGA.initialize('UA-166880304-1');
ReactGA.pageview('/');

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/store" history={history} component={Store} />
					<Route exact path="/gamedev" component={GameDev} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
