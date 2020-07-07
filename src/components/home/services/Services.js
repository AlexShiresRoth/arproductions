import React, { useState, useEffect, useRef } from 'react';
import serviceStyle from './Services.module.scss';
import { addRef, setActive } from '../../../actions/refs';
import { connect } from 'react-redux';
import ServicesGrid from './ServicesGrid';
import { handleSectionIO, handleIO } from '../../customfunctions/handleIO';

const Services = ({ addRef, setActive }) => {
	const [intersecting, setIntersecting] = useState(false);

	const [animate, setAnimate] = useState(false);

	const serviceRef = useRef();

	const animRef = useRef();

	//add ref to the store
	useEffect(() => {
		addRef(serviceRef);
	}, [addRef, serviceRef]);

	//handle state update for when section is intersecting
	useEffect(() => {
		setActive(intersecting ? 'services' : '');
	}, [intersecting, setActive]);

	//animate section depending on intersection
	useEffect(() => {
		handleIO(animRef, 0, 0, setAnimate);
	}, [animRef, setAnimate]);

	//handle section intersecting
	useEffect(() => {
		handleSectionIO(serviceRef, 0, [0, -200, 0, 0], setIntersecting);
		return () => {
			console.log('Cleaned up');
		};
	}, [serviceRef]);

	const bottomSvg = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#1a1a33" fillOpacity="1" d="M0,64L1440,256L1440,0L0,0Z"></path>
		</svg>
	);

	return (
		<div className={serviceStyle.container}>
			<section className={serviceStyle.section} ref={serviceRef} id="services">
				<div className={serviceStyle.heading}>
					<h2 className={animate ? serviceStyle.in_view : serviceStyle.out_of_view} ref={animRef}>
						Need a more impressive web presence?
					</h2>
				</div>
				<ServicesGrid />
			</section>
			{bottomSvg}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, { addRef, setActive })(Services);
