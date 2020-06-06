import React from 'react';
import style from './ResponsiveDisplay.module.scss';

export const ResponsiveDisplay = () => {
	return (
		<div class={style.responsive_block}>
			<div class={style.nav}>
				<span></span>
			</div>
			<div class={style.grid}>
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
