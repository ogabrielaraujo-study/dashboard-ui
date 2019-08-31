import React from 'react';
import './style.scss';

export default function Card({children, type}) {
	return (
		<div className="card" type={type}>{children}</div>
	);
}
