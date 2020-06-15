import React from 'react';
import style from './ResponsiveDisplay.module.scss';

export const ResponsiveDisplay = () => {
	return (
		<div className={style.responsive_block}>
			<div className={style.nav}>
				<span></span>
			</div>
			<div className={style.grid}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
