import React from 'react';
import PropTypes from 'prop-types';
import WorkMap from './WorkMap';
import workStyles from './style/Work.module.scss';

const Work = props => {
	return (
		<section className={workStyles.section}>
			<div className={workStyles.heading}>
				<h2>Work Examples.</h2>
			</div>
			<WorkMap />
		</section>
	);
};

Work.propTypes = {};

export default Work;
