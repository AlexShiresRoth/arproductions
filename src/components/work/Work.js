import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WorkMap from './WorkMap';
import workStyles from './style/Work.module.scss';
import { addRef } from '../../actions/refs';
import { connect } from 'react-redux';

const Work = ({ addRef }) => {
	const workRef = useRef();

	useEffect(() => {
		addRef(workRef);
	}, [workRef, addRef]);

	return (
		<section className={workStyles.section} ref={workRef} id="work">
			<div className={workStyles.heading}>
				<h2>Work Examples.</h2>
			</div>
			<WorkMap />
		</section>
	);
};

Work.propTypes = { addRef: PropTypes.func.isRequired };

const mapStateToProps = state => {
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, { addRef })(Work);
