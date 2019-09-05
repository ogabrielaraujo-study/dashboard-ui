import React from 'react';
import './style.scss';

import Grid from '../Grid';
import Card from '../Card';
import Title from '../Title';
import Text from '../Text';
import HorizontalRule from '../HorizontalRule';

export default function Main({ children }) {
	return (
		<main>{ children }</main>
	);
}
