import React, { useState } from 'react';
import navStyles from './Nav.module.scss';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TiSocialInstagram, TiSocialFacebookCircular, TiSocialTwitterCircular } from 'react-icons/ti';

const Nav = ({ refs: { refs, active }, history }) => {
	const [navState, toggleNav] = useState(false);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	const mobileMenu = (
		<svg viewBox="0 0 100 100" className="menu" onClick={() => toggleNav(!navState)}>
			<g>
				<path
					d="M 0 50 L100 50 Z"
					strokeWidth="8px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
				<path
					d="M 0, 30 L100, 30 Z"
					strokeWidth="8px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
				<path
					d="M 0, 70 L100, 70 Z"
					strokeWidth="8px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
			</g>
		</svg>
	);

	const navList = (
		<>
			<button
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'services'))
				}
				className={active === 'services' ? navStyles.active : ''}
			>
				Services
			</button>
			<button
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'work'))
				}
				className={active === 'work' ? navStyles.active : ''}
			>
				Portfolio
			</button>
			<button
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'packages'))
				}
				className={active === 'packages' ? navStyles.active : ''}
			>
				Packages
			</button>
			<button>
				<NavLink to="/gamedev">Game Development</NavLink>
			</button>
			<button
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'contact'))
				}
				className={active === 'contact' ? navStyles.active : ''}
			>
				Contact
			</button>
		</>
	);

	const storeNav = (
		<>
			<NavLink exact to="/">
				Home
			</NavLink>

			<NavLink to="/gamedev">Game Development</NavLink>

			<button
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'contact'))
				}
				className={active === 'contact' ? navStyles.active : ''}
			>
				Contact
			</button>
		</>
	);

	const sideMenu = (
		<div className={navState ? `${navStyles.side_menu}` : `${navStyles.side_menu} ${navStyles.hidden}`}>
			<div className={navStyles.menu}>{history.location.pathname !== '/' ? storeNav : navList}</div>
			<div className={navStyles.side_menu_close} onClick={() => toggleNav(!navState)}></div>
		</div>
	);

	const scrollToSections = (refs) => {
		toggleNav(!navState);
		if (refs.length <= 0) return;
		console.log(refs[0]);
		const ref = refs[0];
		console.log(ref.current.offsetTop, ref);
		window.scrollTo({
			top: ref ? ref.current.offsetTop - 100 : 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<nav className={navStyles.nav}>
			<div className={navStyles.nav__left}>
				<NavLink to="/" onClick={(e) => scrollToTop()}>
					<div className={navStyles.logo}>
						<img
							src={`https://res.cloudinary.com/snackmanproductions/image/upload/v1589830770/business%20site/fillthevoid_me61wt.png`}
							alt="logo"
						/>
					</div>
					FillTheVoid.io
				</NavLink>
				<div className={navStyles.col}>
					<a
						href="https://www.instagram.com/fillthevoid_productions/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TiSocialInstagram />
					</a>
					<a
						href="https://www.facebook.com/AlexRoth-productions-103812384596069/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TiSocialFacebookCircular />
					</a>
					<a href="https://twitter.com/AlexShiresRoth" target="_blank" rel="noopener noreferrer">
						<TiSocialTwitterCircular />
					</a>
				</div>
			</div>

			<div className={navStyles.mobile_nav__right}>{mobileMenu}</div>
			{sideMenu}

			<div className={navStyles.nav__right}>{history.location.pathname !== '/' ? storeNav : navList} </div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
		active: state.active,
		location: state.location,
	};
};

export default connect(mapStateToProps, null)(withRouter(Nav));
