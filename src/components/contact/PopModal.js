import React from 'react';
import PropTypes from 'prop-types';
import modalStyle from './PopModal.module.scss';

const PopModal = ({ status, error, loading }) => {
	return (
		<>
			{status === 'success' || status === 'error' ? (
				<div className={`${modalStyle.modal} ${status === 'success' ? modalStyle.success : modalStyle.error}`}>
					<p>{status === 'success' ? 'Your email has been sent.' : error}</p>
				</div>
			) : !status && loading ? (
				<div className={modalStyle.loading}></div>
			) : null}
		</>
	);
};

PopModal.propTypes = {
	status: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired,
};

export default PopModal;
