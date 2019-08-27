import React from 'react';

// global style
import './components/global.scss';

// components
import Menu from './components/Menu';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
	return (
		<>
			<Menu />
			<Header />
			<Main />
		</>
	);
}