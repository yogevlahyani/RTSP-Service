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
import Header from './components/Header';
import HomeContainer from './components/Home/HomeContainer';
import LoginContainer from './components/Login/LoginContainer';
import RtspContainer from './components/Rtsp/RtspContainer';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div className="main">
				<Header />
				<Switch>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/login" component={LoginContainer} />
					<Route exact path="/rtsp/:id" component={RtspContainer} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
