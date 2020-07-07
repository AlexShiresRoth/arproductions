import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import WorkMap from './WorkMap';
import workStyles from './style/Work.module.scss';
import { addRef, setActive } from '../../../actions/refs';
import { connect } from 'react-redux';
import { handleIO, handleSectionIO } from '../../customfunctions/handleIO';

const Work = ({ addRef, setActive }) => {
	const workRef = useRef();

	const animRef = useRef();

	const [intersecting, setIntersecting] = useState(false);

	const [animate, setAnimate] = useState(false);

	//add ref to redux store
	useEffect(() => {
		addRef(workRef);
	}, [addRef, workRef]);

	//handle if section is being overlapped
	useEffect(() => {
		handleSectionIO(workRef, 0, [0, 0, 0, 0], setIntersecting);
	}, [setIntersecting, workRef]);

	//add active state if section is overlapped
	useEffect(() => {
		setActive('work');
	}, [intersecting, setActive]);

	//animate on overlap
	useEffect(() => {
		handleIO(animRef, 0, 0, setAnimate);
	}, [setAnimate, animRef]);

	return (
		<section className={workStyles.section} ref={workRef} id="work">
			<div className={workStyles.heading} ref={animRef}>
				<h2 className={animate ? workStyles.in_view : workStyles.out_of_view}>Portfolio.</h2>
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
