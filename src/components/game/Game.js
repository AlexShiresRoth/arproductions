import React, { useEffect, useState, useRef } from 'react';
import { imgs } from './gameImgs';
import gameStyle from './Game.module.scss';
import Carousel from './Carousel';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';
import { handleSectionIO, handleIO } from '../customfunctions/handleIO';

const Game = ({ addRef, setActive }) => {
	const gameRef = useRef();

	const animRef = useRef();

	const [current, setCurrent] = useState(0);

	const [intersecting, setIntersecting] = useState(false);

	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		addRef(gameRef);
	}, [addRef]);

	//get value for intersecting
	useEffect(() => {
		handleSectionIO(gameRef, 0, [0, 0, 0, 0], setIntersecting);
	}, [setIntersecting, gameRef]);

	//add active state
	useEffect(() => {
		setActive('game');
	}, [intersecting, setActive]);

	//animate on overlap
	useEffect(() => {
		handleIO(animRef, 0, 0, setAnimate);
	}, [animRef, setAnimate]);

	return (
		<section className={gameStyle.section} ref={gameRef} id="game">
			<div className={gameStyle.heading} ref={animRef}>
				<h2 className={animate ? gameStyle.in_view : gameStyle.out_of_view}>
					Unreal Engine Game Prototype In Development...
				</h2>
			</div>
			<Carousel imgs={imgs} current={current} setCurrent={setCurrent} />
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
	};
};
export default connect(mapStateToProps, { addRef, setActive })(Game);
