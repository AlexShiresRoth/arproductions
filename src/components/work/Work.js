import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WorkMap from './WorkMap';
import workStyles from './style/Work.module.scss';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';

const Work = ({ addRef, setActive }) => {
	const workRef = useRef();

	useEffect(() => {
		addRef(workRef);
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setActive(workRef.current.id);
				}
			},
			{ rootMargin: '0px 0px -200px 0px', threshold: 0.5 }
		);
		if (workRef.current) {
			observer.observe(workRef.current);
		}
	}, [workRef, addRef, setActive]);

	return (
		<section className={workStyles.section} ref={workRef} id="work">
			<div className={workStyles.heading}>
				<h2>Web Apps/Sites.</h2>
			</div>
			<WorkMap />
		</section>
	);
};

Work.propTypes = { addRef: PropTypes.func.isRequired };

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, { addRef, setActive })(Work);
