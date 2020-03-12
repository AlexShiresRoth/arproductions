import React from 'react';
import PropTypes from 'prop-types';
import contactStyles from './Contact.module.scss';
import Form from './Form';
import About from './About';
const Contact = props => {
	return (
		<section className={contactStyles.section}>
			<About />
			<Form />
		</section>
	);
};

Contact.propTypes = {};

export default Contact;
