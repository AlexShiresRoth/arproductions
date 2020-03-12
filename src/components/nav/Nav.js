import React from 'react';
import PropTypes from 'prop-types';
import navStyles from './Nav.module.scss';

const Nav = props => {
	const navList = (
		<ul>
			<li>
				<a>Services</a>
			</li>
			<li>
				<a>Work</a>
			</li>
			<li>
				<a>About</a>
			</li>
			<li>
				<a>Contact</a>
			</li>
		</ul>
	);
	return (
		<nav className={navStyles.nav}>
			<div className={navStyles.nav__left}>
				<a>AlexRoth productions</a>
			</div>
			<div className={navStyles.nav__right}>{navList}</div>
		</nav>
	);
};

Nav.propTypes = {};

export default Nav;
