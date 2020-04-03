import React, { useEffect, useRef } from 'react';
import headerStyle from './Header.module.scss';
import { headerSvg, bgWaveSvg } from './headerSvg';
import { setActive } from '../../actions/refs';
import { connect } from 'react-redux';
const Header = ({ refs: { refs }, setActive }) => {
	const scrollToSections = refs => {
		const ref = refs[0];
		window.scrollTo({
			top: ref.current !== null ? ref.current.offsetTop : 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const headerRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setActive('');
				}
			},
			{ rootMargin: '0px 0px -200px 0px', threshold: 0.5 }
		);
		if (headerRef.current) {
			observer.observe(headerRef.current);
		}
	}, [setActive]);

	return (
		<header ref={headerRef}>
			<div className={headerStyle.header}>
				<div className={headerStyle.text__box}>
					<div className={headerStyle.inner}>
						<h1>
							AlexRoth <br /> productions
						</h1>
						<p>Professional Web Development.</p>
						<div className={headerStyle.services}>
							<button
								onClick={() =>
									scrollToSections(
										refs.filter(ref => ref.current !== null && ref.current.id === 'contact')
									)
								}
							>
								Contact
							</button>
							<button
								onClick={() =>
									scrollToSections(
										refs.filter(ref => ref.current !== null && ref.current.id === 'work')
									)
								}
							>
								See Work
							</button>
						</div>
					</div>
				</div>
				<div className={headerStyle.bg_svg}>{bgWaveSvg}</div>
				<div className={headerStyle.svg__container}>{headerSvg}</div>
			</div>
		</header>
	);
};

const mapStateToProps = state => {
	return {
		refs: state.refs,
	};
};
export default connect(mapStateToProps, { setActive })(Header);
