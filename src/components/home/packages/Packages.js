import React, { useRef, useEffect, useState } from 'react';
import style from './Packages.module.scss';
import { BsCardChecklist } from 'react-icons/bs';
import { MdWeb, MdSystemUpdate } from 'react-icons/md';
import { addRef, setActive } from '../../../actions/refs';
import { connect } from 'react-redux';
import { handleIO, handleSectionIO } from '../../customfunctions/handleIO';
import Package from './Package';

const Packages = ({ addRef, setActive }) => {
	const [intersecting, setIntersecting] = useState(false);
	const [animate, setAnimate] = useState(false);
	const pkgsRef = useRef(null);
	const animRef = useRef(null);

	const topSvg = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className={animate ? style.top_svg : style.out_of_view}
		>
			<path fill="#1a1a33" fillOpacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path>
		</svg>
	);
	const bottomSvg = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className={animate ? style.bottom_svg : style.out_of_view}
		>
			<path fill="#1a1a33" fillOpacity="1" d="M0,64L1440,256L1440,0L0,0Z"></path>
		</svg>
	);

	useEffect(() => {
		//add this ref to redux store
		addRef(pkgsRef);
	}, [addRef, pkgsRef]);

	useEffect(() => {
		handleSectionIO(pkgsRef, 0, [0, -200, 0, 0], setIntersecting);
	}, [pkgsRef, setIntersecting]);

	//handle state update for when section is intersecting
	useEffect(() => {
		if (intersecting) setActive('packages');
	}, [intersecting, setActive]);

	useEffect(() => {
		handleIO(animRef, 0, 0, setAnimate);
	}, [pkgsRef, setAnimate]);

	const packages = [
		{
			icon: <MdWeb />,
			title: 'Custom built websites.',
			text: `Looking for something unique? We don't use any templating engines to create your site. So
							what you get is a handcrafted site from start to finish.`,
			details: [
				'Informational sites',
				'Dynamic sites (changing data)',
				'Blog sites or E-Commerce sites (anything with a database',
			],
		},
		{
			icon: <MdSystemUpdate />,
			title: 'Website updates and maintenance.',
			text: `Do you have an old website? You may be deterring potential customers with the look and usability
				of an out of date site. We can modernize it and create a great experience for your users!`,
			details: ['Hosting upgrade', 'Website layout renovation', 'Mobile friendly updates'],
		},
		{
			icon: <BsCardChecklist />,
			title: 'Website inspection and optimization.',
			text: `Already have a website? We can inspect the site and squash any bug that may be
							causing problems.`,
			details: ['Code inspection', 'Site speed overhaul'],
		},
	];

	return (
		<div className={style.section_container} ref={pkgsRef} id="packages">
			{topSvg}
			<section className={animate ? style.section : `${style.section} ${style.section_out_of_view}`}>
				<div className={style.heading} ref={animRef}>
					<h2 className={style.heading}>Packages.</h2>
				</div>
				<div className={style.container}>
					{packages.map((item, i) => {
						return <Package item={item} key={i} index={i} />;
					})}
				</div>
			</section>
			{bottomSvg}
		</div>
	);
};

export default connect(null, { addRef, setActive })(Packages);
