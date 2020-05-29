import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import WorkMap from './WorkMap';
import workStyles from './style/Work.module.scss';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';
import { handleIO } from '../customfunctions/handleIO';

const Work = ({ addRef, setActive }) => {
	const workRef = useRef();

	const animRef = useRef();

	const [intersecting, setIntersecting] = useState(false);

	//add ref to redux store
	useEffect(() => addRef(workRef), [addRef, workRef]);

	useEffect(() => {
		handleIO(workRef, 0, 0, setIntersecting);
	}, [setIntersecting, workRef]);

	useEffect(() => {
		setActive('work');
	}, [intersecting, setActive]);

	return (
		<section className={workStyles.section} ref={workRef} id="work">
			<div className={workStyles.heading} ref={animRef}>
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
