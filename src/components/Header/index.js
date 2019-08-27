import React from 'react';
import './style.scss';

import { FiAtSign, FiUser, FiBell, FiLogOut } from "react-icons/fi";

export default function Menu() {
	return (
		<header>
			<div className="left">
				<a href="/"><FiAtSign /><span>Logo</span></a>
			</div>

			<div className="right">
				<a href="/"><FiBell /></a>
				<a href="/"><FiUser /></a>
				<a href="/"><FiLogOut /></a>
			</div>
		</header>
	);
}