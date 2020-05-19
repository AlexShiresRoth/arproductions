import React, { useEffect, useRef } from 'react';
import headerStyle from './Header.module.scss';
import { setActive } from '../../actions/refs';
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
						<p>Web App Development. Mobile App Development. Unreal Engine Game Development.</p>
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
		</header>
	);
};

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
	};
};
export default connect(mapStateToProps, { setActive })(Header);
