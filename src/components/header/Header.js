import React, { useEffect, useRef, useState } from 'react';
import headerStyle from './Header.module.scss';
import { setActive } from '../../actions/refs';
import { connect } from 'react-redux';
import { handleSectionIO } from '../customfunctions/handleIO';

const Header = ({ refs: { refs }, setActive }) => {
	const [intersecting, setIntersecting] = useState(false);

	const scrollToSections = (refs) => {
		const ref = refs[0];
		window.scrollTo({
			top: ref.current !== null ? ref.current.offsetTop : 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const headerRef = useRef();

	const animRef = useRef();

	//activate other states if header is being intersected
	useEffect(() => {
		handleSectionIO(headerRef, 0, 0, setIntersecting);
	}, [setIntersecting]);

	//update state depending on intersecting
	useEffect(() => {
		setActive('');
	}, [setActive, intersecting]);
	return (
		<header>
			<div className={headerStyle.header} ref={headerRef} id="header">
				<div className={headerStyle.text__box} ref={animRef}>
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
		</header>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		refs: state.refs,
	};
};
export default connect(mapStateToProps, { setActive })(Header);
