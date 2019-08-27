import React from 'react';
import './style.scss';

import { FiMenu, FiCalendar, FiPercent, FiBox, FiSettings, FiTrendingUp, FiLayers } from "react-icons/fi";
import ReactTooltip from 'react-tooltip';

export default function Menu() {
	return (
		<nav>
			<ReactTooltip effect="solid" place="right" />
			<a href="/" data-tip="Menu"><FiMenu /></a>
			<a href="/" data-tip="Agenda"><FiCalendar /></a>
			<a href="/" data-tip="Eventos"><FiLayers /></a>
			<a href="/" data-tip="Financeiro"><FiPercent /></a>
			<a href="/" data-tip="Estoque"><FiBox /></a>
			<a href="/" data-tip="Relatórios"><FiTrendingUp /></a>
			<a href="/" data-tip="Configurações"><FiSettings /></a>
		</nav>
	);
}
