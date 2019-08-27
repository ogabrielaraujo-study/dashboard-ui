import React from 'react';
import './style.scss';

import Grid from '../Grid';
import Card from '../Card';
import Title from '../Title';

export default function Main() {
	return (
		<main>
			<Grid cols="1" rows="1">
				<h1>Hello World</h1>

        <Card>
          <Title>Card with Title</Title>
        </Card>
			</Grid>
		</main>
	);
}
