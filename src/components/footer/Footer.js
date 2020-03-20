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
          <a
            href="https://www.instagram.com/alexroth_productions/"
            target="_blank"
            rel="noopener noreferer"
          >
            <TiSocialInstagram />
          </a>
          <a
            href="https://www.facebook.com/AlexRoth-productions-103812384596069/"
            target="_blank"
            rel="noopener noreferer"
          >
            <TiSocialFacebookCircular />
          </a>
          <a
            href="https://twitter.com/AlexShiresRoth"
            target="_blank"
            rel="noopener noreferer"
          >
            <TiSocialTwitterCircular />
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
