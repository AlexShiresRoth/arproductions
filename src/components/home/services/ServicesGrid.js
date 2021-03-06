import React from 'react';
import { servicesArray } from './servicesArray';
import GridItem from './GridItem';

const ServicesGrid = () => {
	return servicesArray.map((service, i) => {
		return <GridItem service={service} i={i} key={i} />;
	});
};

export default ServicesGrid;
