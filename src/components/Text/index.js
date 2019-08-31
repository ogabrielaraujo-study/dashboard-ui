import React from 'react';
import './style.scss';

export default function Text({children}) {
	return (
		<p className="text">{children}</p>
	);
}
