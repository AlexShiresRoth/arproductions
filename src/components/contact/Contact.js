import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import contactStyles from './Contact.module.scss';
import Form from './Form';
import About from './About';
import { addRef } from '../../actions/refs';
import { connect } from 'react-redux';

const Contact = ({ addRef }) => {
	const contactRef = useRef();

	useEffect(() => {
		addRef(contactRef);
	}, [addRef, contactRef]);

	return (
		<section className={contactStyles.section} id="contact" ref={contactRef}>
			<About />
			<Form />
		</section>
	);
};

Contact.propTypes = {
	addRef: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, { addRef })(Contact);
