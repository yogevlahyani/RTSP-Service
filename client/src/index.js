import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import configureStore from './redux/store';
import './index.css';
import App from './App';
import Header from './components/Header';
import LoginContainer from './components/Login/LoginContainer';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div className="main">
				<Header />
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/login" component={LoginContainer} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
