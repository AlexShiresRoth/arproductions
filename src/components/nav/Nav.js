import React, { useEffect, useState } from 'react';
import navStyles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { TiSocialInstagram, TiSocialFacebookCircular, TiSocialTwitterCircular } from 'react-icons/ti';

const Nav = ({ refs: { refs, active }, location: { location } }) => {
	const [isMobile, setMobile] = useState(false);
	const [navState, toggleNav] = useState(false);

	const setResize = (e) => window.addEventListener('resize', (e) => setMobile(window.innerWidth <= 900));

	useEffect(() => {
		setMobile(window.innerWidth <= 900);
		setResize();
		window.scrollTo({ top: 0 });
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	const scrollToSections = (refs) => {
		toggleNav(!navState);
		if (refs.length <= 0) return;
		const ref = refs[0];
		switch (true) {
			case ref.current.id === 'services':
				return window.scrollTo({
					top: ref.current.offsetTop,
					left: 0,
					behavior: 'smooth',
				});
			case ref.current.id === 'contact':
				return window.scrollTo({
					top: ref.current.offsetTop,
					left: 0,
					behavior: 'smooth',
				});
			case ref.current.id === 'work':
				return window.scrollTo({
					top: ref.current.offsetTop,
					left: 0,
					behavior: 'smooth',
				});
			case ref.current.id === 'game':
				return window.scrollTo({
					top: ref.current.offsetTop,
					left: 0,
					behavior: 'smooth',
				});
			default:
				return window.scrollTo({ top: 0 });
		}
	};

	const mobileMenu = (
		<svg viewBox="0 0 100 100" className="menu" onClick={() => toggleNav(!navState)}>
			<g>
				<path
					d="M 0 50 L100 50 Z"
					strokeWidth="3px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
				<path
					d="M 0, 30 L100, 30 Z"
					strokeWidth="3px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
				<path
					d="M 0, 70 L100, 70 Z"
					strokeWidth="3px"
					stroke="#fff"
					className={navState ? navStyles.rotated : ''}
				/>
			</g>
		</svg>
	);

	const navList = (
		<ul>
			<li
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'services'))
				}
				className={active === 'services' ? navStyles.active : ''}
			>
				<button>Services</button>
			</li>
			<li
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'work'))
				}
				className={active === 'work' ? navStyles.active : ''}
			>
				<button>Web</button>
			</li>
			<li
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'game'))
				}
				className={active === 'game' ? navStyles.active : ''}
			>
				<button>Game Development</button>
			</li>
			<li
				onClick={() =>
					scrollToSections(refs.filter((ref) => ref.current !== null && ref.current.id === 'contact'))
				}
				className={active === 'contact' ? navStyles.active : ''}
			>
				<button>Contact</button>
			</li>
		</ul>
	);

	const storeNav = (
		<ul>
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/store" activeClassName={navStyles.active} style={{ textDecoration: 'none' }}>
					Store
				</NavLink>
			</li>
		</ul>
	);

	const sideMenu = (
		<div className={navState ? `${navStyles.side_menu}` : `${navStyles.side_menu} ${navStyles.hidden}`}>
			{navList}
			<div className={navStyles.side_menu_close} onClick={() => toggleNav(!navState)}></div>
		</div>
	);

	return (
		<nav className={navStyles.nav}>
			<div className={navStyles.nav__left}>
				<a onClick={(e) => scrollToTop()} href="#!">
					<div className={navStyles.logo}>
						<img
							src={`https://res.cloudinary.com/snackmanproductions/image/upload/v1589830770/business%20site/fillthevoid_me61wt.png`}
							alt="logo"
						/>
					</div>
					FillTheVoid.io
				</a>
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
			{isMobile ? (
				<>
					<div className={navStyles.mobile_nav__right}>{mobileMenu}</div>
					{sideMenu}
				</>
			) : (
				<div className={navStyles.nav__right}>{location === '/store' ? storeNav : navList} </div>
			)}
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

export default connect(mapStateToProps, null)(Nav);
