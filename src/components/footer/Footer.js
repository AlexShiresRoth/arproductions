import React from 'react';
import PropTypes from 'prop-types';
import footerStyle from './Footer.module.scss';
import {
  TiSocialInstagram,
  TiSocialFacebookCircular,
  TiSocialTwitterCircular
} from 'react-icons/ti';
const Footer = props => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.grid}>
        <div className={footerStyle.col}>
          <p>AlexRoth productions &copy; 2020</p>
        </div>
        <div className={footerStyle.col}>
          <TiSocialInstagram />
          <TiSocialFacebookCircular />
          <TiSocialTwitterCircular />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
