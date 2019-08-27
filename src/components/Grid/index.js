import React from 'react';
import { Container } from './styles';


export default class Grid extends React.Component {
	render() {
		const children = this.props.children;

		return (
			<Container className="container" {...this.props}>{children}</Container>
		);
	}
}