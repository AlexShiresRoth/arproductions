import React from 'react';
import PropTypes from 'prop-types';
import aboutStyle from './About.module.scss';
const About = ({ animate }) => {
	const profilPic = (
		<img
			src="https://res.cloudinary.com/snackmanproductions/image/upload/v1584038425/business%20site/about_pic_qz8dm3.jpg"
			alt="profile-pic"
		/>
	);
	return (
		<div className={animate ? aboutStyle.about_column : aboutStyle.out_of_view}>
			<div className={aboutStyle.col}>
				{profilPic}
				<p>
					Hello, I'm Alex Rothenberg and I created fillthevoid.io to help people meet their web development
					needs. I design for web, mobile and build games using the Unreal Engine, I also enjoy hot sauce. If
					you like my work and would like to do something together, please fill out the form and send me a
					message!
				</p>
			</div>
		</div>
	);
};

About.propTypes = {};

export default About;
