import React from 'react';
import { Div } from './styles';


export default class Grid extends React.Component {
	render() {
		const children = this.props.children;

		return (
			<Div className="grid" {...this.props}>{children}</Div>
		);
	}
}
