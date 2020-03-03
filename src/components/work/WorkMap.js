import React from 'react';
import PropTypes from 'prop-types';
import workStyle from './style/WorkMap.module.scss';
import { workArray } from './workArray';
const WorkMap = props => {
	const works = workArray.map((item, i) => {
		return (
			<a href={item.url} target="_blank" rel="noopener noreferrer">
				<div className={workStyle.item} key={i}>
					<img src={item.src} alt={item.title}></img>
				</div>
			</a>
		);
	});

	return <div className={workStyle.work__grid}>{works}</div>;
};

WorkMap.propTypes = {};

export default WorkMap;
