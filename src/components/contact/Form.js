import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopModal from './PopModal';
import formStyle from './Form.module.scss';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		deadline: '',
		message: '',
		status: '',
		response: '',
		loading: false,
	});

	const { name, email, subject, deadline, message, status, response, loading } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	const formSubmit = async e => {
		e.preventDefault();
		setFormData({ ...formData, loading: true });
		const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

		await axios({
			method: 'POST',
			url: `${corsAnywhere}https://asrserver.herokuapp.com/api/arproductions/send-email?&name=${name}&email=${email}&subject=${subject}&deadline=${deadline}&message=${message}`,
			data: {
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:3000/',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		})
			.then(res => {
				console.log(res);
				setFormData({ status: 'success', loading: false });
				setTimeout(() => {
					setFormData({ name: '', email: '', message: '', subject: '', deadline: '', status: '' });
				}, 3000);
			})
			.catch(err => {
				const errMsg = JSON.stringify(err);
				console.error(JSON.parse(errMsg).message);
				setFormData({
					...formData,
					status: 'error',
					response: JSON.parse(errMsg).message,
					loading: false,
				});
			});
	};

	useEffect(() => {
		setFormData({
			name: '',
			email: '',
			subject: '',
			deadline: '',
			message: '',
		});
	}, []);

	return (
		<form className={formStyle.form} onSubmit={e => formSubmit(e)}>
			<PopModal status={status} error={response} loading={loading} />
			<div className={formStyle.row}>
				<label>Name</label>
				<input type="text" name="name" value={name} onChange={e => onChange(e)} required />
			</div>
			<div className={formStyle.row}>
				<label>Email</label>
				<input type="email" name="email" value={email} onChange={e => onChange(e)} required />
			</div>
			<div className={formStyle.row}>
				<label>Subject</label>
				<input type="text" name="subject" value={subject} onChange={e => onChange(e)} required />
			</div>
			<div className={formStyle.row}>
				<label>Deadline</label>
				<input type="text" name="deadline" value={deadline} onChange={e => onChange(e)} required />
			</div>
			<div className={formStyle.row}>
				<label>Message</label>
				<textarea name="message" value={message} onChange={e => onChange(e)} required></textarea>
			</div>
			<button onClick={e => formSubmit(e)}>Send</button>
		</form>
	);
};

export default Form;
