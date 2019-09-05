import React from 'react';
import './style.scss';

import { FiMenu, FiLayout, FiFileText } from "react-icons/fi";
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

export default function Menu() {
	return (
		<nav>
			<ReactTooltip effect="solid" place="right" />
      <Link to="/" data-tip="Menu"><FiMenu /></Link>
			<Link to="/" data-tip="Welcome"><FiLayout /></Link>
			<Link to="/form" data-tip="Form"><FiFileText /></Link>
		</nav>
	);
}
