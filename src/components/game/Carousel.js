import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import imgStyle from './Game.module.scss';
const Carousel = ({ imgs }) => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((current) => current + 1);
		}, 5000);
		if (current > imgs.length - 1) {
			setCurrent(0);
		}
		return () => clearInterval(interval);
	}, [current, imgs.length]);

	return (
		<div className={imgStyle.img_container}>
			{imgs.map((img, i) => {
				return (
					<img
						src={img}
						alt="game"
						key={i}
						className={current === i ? imgStyle.current_img : imgStyle.hidden}
					></img>
				);
			})}
			<div className={imgStyle.index_marker}>
				{imgs.map((item, i) => {
					return <span key={i} className={current === i ? imgStyle.marker_current : imgStyle.marker}></span>;
				})}
			</div>
		</div>
	);
};

Carousel.propTypes = {
	imgs: PropTypes.array.isRequired,
};

export default Carousel;
