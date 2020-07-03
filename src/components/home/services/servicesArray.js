import React from 'react';
import { ResponsiveDisplay } from './ResponsiveDisplay';
import { DiMongodb, DiReact, DiNodejsSmall } from 'react-icons/di';
import { Icon } from '@iconify/react';
import gatsbyLine from '@iconify/icons-ri/gatsby-line';
import languageTypescript from '@iconify/icons-mdi/language-typescript';

export const servicesArray = [
	{
		title: 'Responsive Websites.',
		text: `Each website is built to be responsive. Responsive design means that your site will adjust to various devices: tablets, mobile devices and desktops. `,
		img: null,
		imgs: null,
		icons: null,
		animIcons: [{ icon: <ResponsiveDisplay key="responsivedisplay" /> }],
		ref: 'ref1',
	},
	{
		title: 'Unique Layouts.',
		text: `To make your business standout, you need a custom layout that sets your business apart from all the cookie-cutter
							template sites. I build unique sites from scratch,
                            tailored to your business's needs and interests.`,
		img: null,
		imgs: [
			'https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_51,w_994/v1582755367/business%20site/2020-02-26_p0vg8y.png',

			'https://res.cloudinary.com/snackmanproductions/image/upload/v1581450719/portfolio/2020-02-11_ii3g55.png',

			'https://res.cloudinary.com/snackmanproductions/image/upload/v1580442667/portfolio/2019-10-29_kzfuqc.png',

			'https://res.cloudinary.com/snackmanproductions/image/upload/v1575660519/portfolio/2019-12-06_1_awxsjf.png',
		],
		icons: null,
		animIcons: null,
		ref: 'ref2',
	},
	{
		title: 'Modern Tech Stack.',
		text: `We stay up to date with the latest technologies so your clients and potential clients get a modern and user friendly experience.`,
		img: null,
		imgs: null,
		animIcons: null,
		icons: [
			{
				icon: (
					<span>
						<DiMongodb />
						MongoDB
					</span>
				),
			},
			{
				icon: (
					<span>
						<DiReact />
						ReactJS
					</span>
				),
			},
			{
				icon: (
					<span>
						<DiNodejsSmall /> NodeJS
					</span>
				),
			},
			{
				icon: (
					<span>
						<Icon icon={gatsbyLine} /> GatsbyJS
					</span>
				),
			},
			{
				icon: (
					<span>
						<Icon icon={languageTypescript} />
						TypeScript
					</span>
				),
			},
			{
				icon: (
					<span>
						<DiMongodb />
						MongoDB
					</span>
				),
			},
			{
				icon: (
					<span>
						<DiReact />
						ReactJS
					</span>
				),
			},
			{
				icon: (
					<span>
						<DiNodejsSmall /> NodeJS
					</span>
				),
			},
			{
				icon: (
					<span>
						<Icon icon={gatsbyLine} /> GatsbyJS
					</span>
				),
			},
			{
				icon: (
					<span>
						<Icon icon={languageTypescript} />
						TypeScript
					</span>
				),
			},
		],
		ref: 'ref3',
	},
];
