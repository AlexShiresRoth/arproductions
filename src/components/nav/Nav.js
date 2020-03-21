import React, { useEffect, useState } from 'react';
import navStyles from './Nav.module.scss';
import { connect } from 'react-redux';

const Nav = ({ refs: { refs, active } }) => {
	const [isMobile, setMobile] = useState(false);
	const [navState, toggleNav] = useState(false);

	const setResize = e => window.addEventListener('resize', e => setMobile(window.innerWidth <= 700));

	useEffect(() => {
		setMobile(window.innerWidth <= 700);
		setResize();
	}, []);

	const scrollToSections = ref => {
		toggleNav(!navState);
		window.scrollTo({
			top: ref ? (ref.current.id === 'services' ? ref.current.offsetTop + 900 : ref.current.offsetTop) : 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const mobileMenu = (
		<svg viewBox="0 0 100 100" class="menu" onClick={() => toggleNav(!navState)}>
			<g>
				<path
					d="M 0 50 L100 50 Z"
					stroke-width="3px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
				<path
					d="M 0, 30 L100, 30 Z"
					stroke-width="3px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
				<path
					d="M 0, 70 L100, 70 Z"
					stroke-width="3px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
			</g>
		</svg>
	);

	const navList = (
		<ul>
			<li
				onClick={() => scrollToSections(refs.filter(ref => ref.current.id === 'services')[0])}
				className={active === 'services' ? navStyles.active : ''}
			>
				<a>Services</a>
			</li>
			<li
				onClick={() => scrollToSections(refs.filter(ref => ref.current.id === 'work')[0])}
				className={active === 'work' ? navStyles.active : ''}
			>
				<a>Work</a>
			</li>
			<li
				onClick={() => scrollToSections(refs.filter(ref => ref.current.id === 'contact')[0])}
				className={active === 'contact' ? navStyles.active : ''}
			>
				<a>Contact</a>
			</li>
		</ul>
	);

	const sideMenu = (
		<div className={navState ? `${navStyles.side_menu}` : `${navStyles.side_menu} ${navStyles.hidden}`}>
			{navList}
			<div className={navStyles.side_menu_close} onClick={() => toggleNav(!navState)}></div>
		</div>
	);

	console.log(navState);
	return (
		<nav className={navStyles.nav}>
			<div className={navStyles.nav__left}>
				<a>AlexRoth productions</a>
			</div>
			{isMobile ? (
				<>
					<div className={navStyles.mobile_nav__right}>{mobileMenu}</div>
					{sideMenu}
				</>
			) : (
				<div className={navStyles.nav__right}>{navList}</div>
			)}
		</nav>
	);
};

const mapStateToProps = state => {
	return {
		refs: state.refs,
		active: state.active,
	};
};

export default connect(mapStateToProps, null)(Nav);
