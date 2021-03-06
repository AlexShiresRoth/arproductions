import React, { useEffect, useRef } from 'react';
import headerStyle from './Header.module.scss';
import { setActive } from '../../../actions/refs';
import { connect } from 'react-redux';

const Header = ({ refs: { refs }, setActive }) => {
	const scrollToSections = (refs) => {
		const ref = refs[0];
		window.scrollTo({
			top: ref.current !== null ? ref.current.offsetTop : 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const headerRef = useRef();

	//update state depending on intersecting
	useEffect(() => {
		setActive('');
	}, [setActive]);

	const bottomSvg = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={headerStyle.svg_btm}>
			<path fill="#1a1a33" fillOpacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path>
		</svg>
	);

	return (
		<header>
			<div className={headerStyle.header} ref={headerRef} id="header">
				<div className={headerStyle.text__box}>
					<div className={headerStyle.inner}>
						<img
							src={`https://res.cloudinary.com/snackmanproductions/image/upload/v1589830770/business%20site/fillthevoid_me61wt.png`}
							alt="logo"
						/>
						<h1>
							Fill The Void <br /> productions.
						</h1>
					</div>
				</div>
				<div className={headerStyle.services}>
					<div className={headerStyle.text}>
						<p>Web/Mobile/Game Development.</p>
					</div>
					<div className={headerStyle.actions}>
						<button
							onClick={() =>
								scrollToSections(
									refs.filter((ref) => ref.current !== null && ref.current.id === 'contact')
								)
							}
						>
							Contact Us
						</button>
						<button
							onClick={() =>
								scrollToSections(
									refs.filter((ref) => ref.current !== null && ref.current.id === 'work')
								)
							}
						>
							Portfolio
						</button>
					</div>
				</div>
			</div>
			{bottomSvg}
		</header>
	);
};

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
	};
};
export default connect(mapStateToProps, { setActive })(Header);
