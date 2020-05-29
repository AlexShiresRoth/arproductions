import React, { useState, useEffect, useRef } from 'react';
import workStyle from './style/WorkMap.module.scss';
import { workArray } from './workArray';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import IntersectionObserver from 'intersection-observer-polyfill';
const WorkMap = (_) => {
	const [start, setStart] = useState(0);
	const [isMobile, setMobile] = useState(window.innerWidth <= 900);
	const [end, setEnd] = useState(6);
	const [shuffledArr, shuffleArray] = useState([]);

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

	const [inView, setView] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio > 0.2) {
					console.log(entry);
					setView(true);
					observer.unobserve(entry.target);
				}
			},
			{ rootMargin: '0px 0px -200px 0px', threshold: 0.4 }
		);
		if (itemRef.current) {
			observer.observe(itemRef.current);
		}

		return () => observer.disconnect();
	}, [setView]);

	const works = shuffledArr.slice(0, end).map((item, i) => {
		return (
			<a href={item.url} target="_blank" rel="noopener noreferrer" className={workStyle.item} key={i}>
				<img src={item.src} alt={item.title}></img>
			</a>
		);
	});

	return (
		<section className={workStyle.section}>
			<div className={inView ? workStyle.heading : workStyle.out_of_view} ref={itemRef}>
				<button onClick={(e) => setStart((prev) => (prev <= 0 ? (prev = workArray.length - 1) : prev - 1))}>
					<IoIosArrowBack />
				</button>
				<p>
					Total Projects: <span>{workArray.length}</span>
				</p>
				<button onClick={(e) => setStart((prev) => (prev < workArray.length - 1 ? prev + 1 : (prev = 0)))}>
					<IoIosArrowForward />
				</button>
			</div>
			<div className={inView ? workStyle.work__grid : workStyle.out_of_view}>{works}</div>
		</section>
	);
};

export default WorkMap;
