import React, { useEffect, useRef } from 'react';
import headerStyle from './Header.module.scss';
import { headerSvg, bgWaveSvg } from './headerSvg';
import { setActive } from '../../actions/refs';
import { connect } from 'react-redux';
const Header = ({ refs: { refs }, setActive }) => {
	const waveSvg = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#380070"
				fill-opacity="1"
				d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,154.7C840,181,960,203,1080,186.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
			></path>
		</svg>
	);
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

				<div className={headerStyle.svg__container}>{headerSvg}</div>
			</div>
			<div className={headerStyle.bg_svg}>{bgWaveSvg}</div>
		</header>
	);
};

const mapStateToProps = state => {
	return {
		refs: state.refs,
	};
};
export default connect(mapStateToProps, { setActive })(Header);
