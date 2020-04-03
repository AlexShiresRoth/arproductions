import React, { useState, useEffect, useRef } from 'react';
import serviceStyle from './Services.module.scss';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';
import { servicesArray } from './servicesArray';
import ServiceImgsSlide from './ServiceImgsSlide';

const Services = ({ addRef, setActive }) => {
	const [currentIndex, setIndex] = useState(0);

	const [transition, setTransition] = useState(false);
	const changeIndex = index => setIndex(index);

	const serviceRef = useRef();

	useEffect(() => {
		setTransition(true);

		addRef(serviceRef);

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					console.log(entry);
					setActive(serviceRef.current.id);
				}
			},
			{ rootMargin: '0px 0px -200px 0px', threshold: 0.5 }
		);
		if (serviceRef.current) {
			observer.observe(serviceRef.current);
		}

		setTimeout(() => {
			setTransition(false);
		}, 1000);

		return () => clearTimeout();
	}, [currentIndex, addRef, serviceRef, setActive]);

	const services = servicesArray.map((service, i) => {
		return (
			<div className={serviceStyle.grid}>
				<div className={serviceStyle.col}>
					<div className={serviceStyle.col_grid} style={i % 2 !== 0 ? { background: 'transparent' } : null}>
						<div className={serviceStyle.inner_left} style={i % 2 !== 0 ? { order: '1' } : { order: '0' }}>
							<h3>{service.title}</h3>
							<p>{service.text}</p>
						</div>
						<div
							className={service.imgs !== null ? serviceStyle.inner__img__grid : serviceStyle.inner_right}
						>
							{service.imgs !== null ? (
								<>
									<div class={serviceStyle.grid__inner}>
										<img
											src={service.imgs[currentIndex]}
											alt="website layout"
											className={transition ? serviceStyle.current_img : ''}
											key={currentIndex}
										/>
										<ServiceImgsSlide
											imgs={service.imgs}
											onClick={changeIndex}
											currentIndex={currentIndex}
											serviceStyle={serviceStyle}
											transition={transition}
										/>
									</div>
									<div className={serviceStyle.currentindex__marker}>
										{service.imgs.map((item, i) => (
											<span
												className={currentIndex === i ? serviceStyle.active__span : null}
											></span>
										))}
									</div>
								</>
							) : service.img !== null ? (
								service.img
							) : (
								service.icons.map(icon => icon.icon)
							)}
						</div>
					</div>
				</div>
			</div>
		);
	});
	return (
		<section className={serviceStyle.section}>
			<div className={serviceStyle.heading} ref={serviceRef} id="services">
				<h2>Need a more impressive web presence?</h2>
			</div>
			{services}
		</section>
	);
};

const mapStateToProps = state => {
	return {
		refs: state.refs,
	};
};

export default connect(mapStateToProps, { addRef, setActive })(Services);
