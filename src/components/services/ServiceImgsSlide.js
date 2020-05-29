import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ServiceImgsSlide = ({ imgs, onClick, currentIndex, serviceStyle }) => {
	const [transition, setTransition] = useState(false);

	useEffect(() => {
		setTransition(true);
	}, [transition]);
	return imgs
		.map((img, i) => (
			<div
				className={
					transition
						? `${serviceStyle.img_container} ${serviceStyle.img_container_transition}`
						: serviceStyle.img_container
				}
				onClick={(e) => onClick(i)}
			>
				<img src={img} alt={img} key={i} />
			</div>
		))
		.filter((img, i) => i !== currentIndex);
};

ServiceImgsSlide.propTypes = {
	imgs: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
	serviceStyle: PropTypes.object.isRequired,
	currentIndex: PropTypes.number.isRequired,
	transition: PropTypes.bool.isRequired,
};

export default ServiceImgsSlide;
