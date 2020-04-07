import React, { useEffect, useState, useRef } from 'react';
import { imgs } from './gameImgs';
import gameStyle from './Game.module.scss';
import Carousel from './Carousel';
import { bgSvg } from './bgSvg';
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
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#380070"
					fill-opacity="1"
					d="M0,0L48,0C96,0,192,0,288,10.7C384,21,480,43,576,48C672,53,768,43,864,48C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>
			<div className={gameStyle.heading}>
				<h2>Unreal Engine Game Prototype In Development...</h2>
			</div>
			<Carousel imgs={imgs} current={current} setCurrent={setCurrent} />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#380070"
					fill-opacity="1"
					d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,186.7C672,192,768,256,864,282.7C960,309,1056,299,1152,288C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		refs: state.refs,
	};
};
export default connect(mapStateToProps, { addRef, setActive })(Game);
