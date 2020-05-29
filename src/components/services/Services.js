import React, { useState, useEffect, useRef } from 'react';
import serviceStyle from './Services.module.scss';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';

import ServicesGrid from './ServicesGrid';
import { handleSectionIO } from '../customfunctions/handleIO';

const Services = ({ addRef, setActive }) => {
	const [intersecting, setIntersecting] = useState(false);

	const serviceRef = useRef();

	const animRef = useRef();

	//add ref to the store
	useEffect(() => {
		addRef(serviceRef);
	}, [addRef, serviceRef]);

	//handle section intersecting
	useEffect(() => {
		handleSectionIO(serviceRef, 0, 0, setIntersecting);
	}, [serviceRef]);

	//handle state update for when section is intersecting
	useEffect(() => {
		setActive('services');
	}, [intersecting, setActive]);

	return (
		<section className={serviceStyle.section} ref={serviceRef} id="services">
			<div className={serviceStyle.heading} ref={animRef}>
				<h2 className={intersecting ? serviceStyle.in_view : serviceStyle.out_of_view}>
					Need a more impressive web presence?
				</h2>
			</div>
			<ServicesGrid />
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, { addRef, setActive })(Services);
