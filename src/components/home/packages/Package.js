import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Package.module.scss';

const Package = ({ item, index }) => {
	const [showDetails, setDetailsState] = useState(false);

	return (
		<div className={style.col} key={index}>
			{item.icon}
			<h3>{item.title}</h3>
			<p>{item.text}</p>
			<div className={showDetails ? style.details : style.hidden}>
				{item.details.map((detail, i) => {
					return <li key={i}>{detail}</li>;
				})}
			</div>
			<button onClick={(e) => setDetailsState(!showDetails)}>
				{showDetails ? 'Hide Details' : 'Show Details'}
			</button>
		</div>
	);
};

Package.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number,
};

export default Package;
