import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import contactStyles from './Contact.module.scss';
import Form from './Form';
import About from './About';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';
import { handleSectionIO } from '../customfunctions/handleIO';
const Contact = ({ addRef, setActive }) => {
	const contactRef = useRef();
	const [intersecting, setIntersecting] = useState(false);

	//add ref to redux store
	useEffect(() => {
		addRef(contactRef);
	}, [addRef]);

	//handle intersection observing
	useEffect(() => {
		handleSectionIO(contactRef, 0, 0, setIntersecting);
	}, [setIntersecting]);

	useEffect(() => {
		setActive('contact');
	}, [intersecting, setActive]);

	return (
		<section className={contactStyles.section} ref={contactRef} id="contact">
			<div className={contactStyles.heading}>
				<h2>Get started on your project.</h2>
			</div>
			<div className={contactStyles.grid}>
				<About />
				<Form />
			</div>
		</section>
	);
};

Contact.propTypes = {
	addRef: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
		active: state.active,
	};
};

export default connect(mapStateToProps, { addRef, setActive })(Contact);
