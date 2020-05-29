import React, { useEffect, useState, createRef } from 'react';
import serviceStyle from './GridItem.module.scss';
import ServiceImgsSlide from './ServiceImgsSlide';
import { handleIO } from '../customfunctions/handleIO';

const GridItem = ({ i, service }) => {
	const [currentIndex, setIndex] = useState(0);

	const [intersecting, setIntersecting] = useState(false);

	const changeIndex = (index) => setIndex(index);

	const itemRef = createRef();

	//handle intersecting update
	useEffect(() => {
		handleIO(itemRef, 0, 0, setIntersecting);
	}, [setIntersecting, itemRef]);

	return (
		<div className={intersecting ? serviceStyle.grid : `${serviceStyle.grid} ${serviceStyle.out_of_view}`}>
			<div className={serviceStyle.col} ref={itemRef}>
				<div className={serviceStyle.col_grid} style={i % 2 !== 0 ? { background: 'transparent' } : null}>
					<div className={serviceStyle.inner_left} style={i % 2 !== 0 ? { order: '1' } : { order: '0' }}>
						<h3>{service.title}</h3>
						<p>{service.text}</p>
					</div>
					<div className={service.imgs !== null ? serviceStyle.inner__img__grid : serviceStyle.inner_right}>
						{service.imgs !== null ? (
							<>
								<div class={intersecting ? serviceStyle.grid__inner : serviceStyle.out_of_view}>
									<img src={service.imgs[currentIndex]} alt="website layout" />
									<ServiceImgsSlide
										imgs={service.imgs}
										onClick={changeIndex}
										currentIndex={currentIndex}
										serviceStyle={serviceStyle}
									/>
								</div>
								<div className={serviceStyle.currentindex__marker}>
									{service.imgs.map((item, i) => (
										<span className={currentIndex === i ? serviceStyle.active__span : null}></span>
									))}
								</div>
							</>
						) : service.img !== null ? (
							<img
								src={service.img}
								alt="responsive layout"
								className={intersecting ? serviceStyle.in_view : serviceStyle.out_of_view}
							/>
						) : (
							service.icons.map((icon) => icon.icon)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GridItem;
