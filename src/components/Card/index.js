import React from 'react';
import './style.scss';


export default class Card extends React.Component {
	render() {
		const children = this.props.children;

		return (
			<div className="card" {...this.props}>{children}</div>
		);
	}
}
