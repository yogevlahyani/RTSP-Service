import React from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
	const token = localStorage.getItem('token');

	if (!token) {
		return <Redirect to={{ pathname: 'login' }} />;
	}

	return (
		<div className="App">
			Home Page
		</div>
	);
};

export default App;
