import React from 'react';
import PropTypes from 'prop-types';
import aboutStyle from './About.module.scss';

const About = props => {
  return (
    <section className={aboutStyle.section}>
      <div className={aboutStyle.heading}>
        <h2>About AlexRoth productions</h2>
      </div>
      <div className={aboutStyle.desc__grid}>
        <p>Hello, I'm Alex Rothenberg and I make websites.</p>
      </div>
    </section>
  );
};

About.propTypes = {};

export default About;
