import React from 'react';
import { FiDatabase, FiArrowRight } from 'react-icons/fi';
import { FaArrowsAltH } from 'react-icons/fa';
import { AiOutlineFile } from 'react-icons/ai';
export const servicesArray = [
  {
    title: 'Responsively Designed Sites.',
    text: `Each website is built to be responsive. Responsive design means that your site will look good in different devices: tablets, mobile devices and desktops. `,
    img: (
      <img
        src="https://res.cloudinary.com/snackmanproductions/image/upload/v1582658614/business%20site/responsive-gif_kktmq9.gif"
        alt="gif"
      ></img>
    ),
    imgs: null,
    icons: null
  },
  {
    title: 'Unique Layouts.',
    text: `To make your business standout, you need a custom layout separate from all the cookie-cutter
							templates by the likes of Wix, Squarespace, Godaddy, etc. I build unique sites from scratch,
                            tailored to your business' needs and interests.`,
    img: null,
    imgs: [
      'https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_51,w_994/v1582755367/business%20site/2020-02-26_p0vg8y.png',

      'https://res.cloudinary.com/snackmanproductions/image/upload/v1581450719/portfolio/2020-02-11_ii3g55.png',

      'https://res.cloudinary.com/snackmanproductions/image/upload/v1580442667/portfolio/2019-10-29_kzfuqc.png',

      'https://res.cloudinary.com/snackmanproductions/image/upload/v1575660519/portfolio/2019-12-06_1_awxsjf.png'
    ],
    icons: null
  },
  {
    title: 'Basic to complex websites.',
    text: `Need an informational website or something a bit more complex requiring a database?`,
    img: null,
    imgs: null,
    icons: [
      { icon: <AiOutlineFile /> },
      { icon: <FiArrowRight /> },
      { icon: <FiDatabase /> }
    ]
  }
];
