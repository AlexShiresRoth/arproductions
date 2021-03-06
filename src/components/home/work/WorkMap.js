import React, { useState, useEffect, useRef } from 'react';
import workStyle from './style/WorkMap.module.scss';
import { workArray } from './workArray';
import { handleIO } from '../../customfunctions/handleIO';

const WorkMap = (_) => {
	const [start, setStart] = useState(0);

	const [isMobile, setMobile] = useState(window.innerWidth <= 900);

	const [end, setEnd] = useState(6);

	const [shuffledArr, shuffleArray] = useState([]);

	const [intersecting, setIntersecting] = useState(false);

	useEffect(() => {
		setStart(Math.floor(Math.random() * workArray.length));
	}, []);

	useEffect(() => {
		const handleShuffleArray = () => {
			const randomArr = [];

			let num = start;
			workArray.forEach((item, i, arr) => {
				num = num >= 0 && num < arr.length - 1 ? (num += 1) : 0;

				randomArr.push(arr[num]);
			});
			return shuffleArray(randomArr);
		};

		handleShuffleArray();
	}, [start]);

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth <= 900);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isMobile]);

	useEffect(() => {
		isMobile ? setEnd(workArray.length) : setEnd(6);
	}, [isMobile]);

	const itemRef = useRef(null);

	//handle if section is intersecting
	useEffect(() => {
		handleIO(itemRef, 0, 0, setIntersecting);
	}, [itemRef, setIntersecting]);

	const works = shuffledArr.slice(0, end).map((item, i) => {
		return (
			<div className={workStyle.project_container} key={i}>
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					className={(i + 1) % 2 === 0 ? `${workStyle.item} ${workStyle.left}` : workStyle.item}
				>
					<img src={item.src} alt={item.title}></img>
				</a>
				<h2>{item.title}</h2>
			</div>
		);
	});

	return (
		<div className={workStyle.section}>
			<div
				className={intersecting ? workStyle.heading : `${workStyle.heading} ${workStyle.out_of_view}`}
				ref={itemRef}
			></div>
			<div className={intersecting ? workStyle.work__grid : workStyle.out_of_view}>{works}</div>
		</div>
	);
};

export default WorkMap;
