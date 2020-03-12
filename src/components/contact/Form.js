import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import formStyle from './Form.module.scss';
const Form = props => {
	return (
		<form className={formStyle.form}>
			<div className={formStyle.row}>
				<label>Name</label>
				<input type="text" name="name" />
			</div>
			<div className={formStyle.row}>
				<label>Email</label>
				<input type="text" name="email" />
			</div>
			<div className={formStyle.row}>
				<label>Subject</label>
				<input type="text" name="subject" />
			</div>
			<div className={formStyle.row}>
				<label>Deadline</label>
				<input type="text" name="deadline" />
			</div>
			<div className={formStyle.row}>
				<label>Message</label>
				<textarea name="message"></textarea>
			</div>
			<button>Send</button>
		</form>
	);
};

Form.propTypes = {};

export default Form;
