import React from 'react';
import './style.scss';

import Grid from '../Grid';

export default function Main() {
	return (
		<main>
			<Grid cols="5" rows="2">
				<h1>Box 1</h1>
				<h1 double="true">Box 2</h1>
				<h1>Box 3</h1>
				<h1>Box 4</h1>
				<h1>Box 5</h1>
				<h1>Box 6</h1>
				<h1>Box 7</h1>
				<h1>Box 8</h1>
			</Grid>
		</main>
	);
}
