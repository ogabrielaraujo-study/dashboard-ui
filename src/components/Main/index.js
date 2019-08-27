import React from 'react';
import './style.scss';

import Grid from '../Grid';
import Card from '../Card';

export default function Main() {
	return (
		<main>
			<Grid cols="1" rows="1">
				<h1>Hello World</h1>

        <Card>
          <span>Card</span>
        </Card>
			</Grid>
		</main>
	);
}
