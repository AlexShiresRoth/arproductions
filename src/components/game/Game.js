import React, { useEffect, useState, useRef } from 'react';
import { imgs } from './gameImgs';
import gameStyle from './Game.module.scss';
import Carousel from './Carousel';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';

const Game = ({ addRef, setActive }) => {
	const gameRef = useRef();

	const [current, setCurrent] = useState(0);

	useEffect(() => {
		addRef(gameRef);
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setActive(gameRef.current.id);
				}
			},
			{ rootMargin: '0px 0px -200px 0px', threshold: 0.5 }
		);
		if (gameRef.current) {
			observer.observe(gameRef.current);
		}
		return () => clearInterval();
	}, [gameRef, addRef, setActive]);

	return (
		<section className={gameStyle.section} ref={gameRef} id="game">
			<div className={gameStyle.heading}>
				<h2>Game Prototype In Development...</h2>
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
