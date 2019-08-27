import React from 'react';
import './style.scss';

export default function Title({type, children}) {
	return (
		<h1 className="title">
      {children}
    </h1>
	);
}
