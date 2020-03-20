import React from 'react';
import navStyles from './Nav.module.scss';
import { connect } from 'react-redux';
const Nav = ({ refs: { refs } }) => {
	console.log(refs);

	const scrollToSections = ref => {
		console.log(ref);
		window.scrollTo({
			top: ref ? ref.current.offsetTop : 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const navList = (
		<ul>
			<li onClick={() => scrollToSections(refs.filter(ref => ref.current.id === 'services')[0])}>
				<a>Services</a>
			</li>
			<li onClick={() => scrollToSections(refs.filter(ref => ref.current.id === 'work')[0])}>
				<a>Work</a>
			</li>
			<li onClick={() => scrollToSections(refs.filter(ref => ref.current.id === 'contact')[0])}>
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

const mapStateToProps = state => {
	console.log(state);
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, null)(Nav);
