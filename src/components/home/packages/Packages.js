import React from 'react';
import style from './Packages.module.scss';
import { BsCardChecklist } from 'react-icons/bs';
import { MdWeb, MdSystemUpdate } from 'react-icons/md';
const Packages = (props) => {
	const topSvg = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={style.top_svg}>
			<path fill="#1a1a33" fillOpacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path>
		</svg>
	);
	const bottomSvg = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={style.bottom_svg}>
			<path fill="#1a1a33" fillOpacity="1" d="M0,64L1440,256L1440,0L0,0Z"></path>
		</svg>
	);
	return (
		<div className={style.section_container}>
			{topSvg}
			<section className={style.section}>
				<div className={style.heading}>
					<h2 className={style.heading}>What we offer.</h2>
				</div>
				<div className={style.container}>
					<div className={style.col}>
						<MdWeb />
						<h3>Custom built websites.</h3>
						<p>
							We don't use any templating engines to create your site. So what you get is a handcrafted
							site from start to finish.
						</p>
						{/* <button>Pricing.</button> */}
					</div>
					<div className={style.col}>
						<MdSystemUpdate />
						<h3>Website updates and maintenance.</h3>
						<p>
							Do you have an old website? You may be deterring potential customers with the look and feel
							of an out of date site. We can modernize it and create a great experience for your users!
						</p>
						{/* <button>Pricing.</button> */}
					</div>
					<div className={style.col}>
						<BsCardChecklist />
						<h3>Website inspection and optimization.</h3>
						<p>
							Already have a website? We can inspect the site's code and squash any bug that may be
							causing problems.
						</p>
						{/* <button>Pricing.</button> */}
					</div>
				</div>
			</section>
			{bottomSvg}
		</div>
	);
};

export default Packages;
