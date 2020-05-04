import React from 'react';
import footerStyle from './Footer.module.scss';
import { TiSocialInstagram, TiSocialFacebookCircular, TiSocialTwitterCircular } from 'react-icons/ti';
const Footer = (props) => {
	return (
		<footer className={footerStyle.footer}>
			<div className={footerStyle.grid}>
				<div className={footerStyle.col}>
					<p>Fill The Void Productions &copy; 2020</p>
				</div>
				<div className={footerStyle.col}>
					<a href="https://www.instagram.com/alexroth_productions/" target="_blank" rel="noopener noreferer">
						<TiSocialInstagram />
					</a>
					<a
						href="https://www.facebook.com/AlexRoth-productions-103812384596069/"
						target="_blank"
						rel="noopener noreferer"
					>
						<TiSocialFacebookCircular />
					</a>
					<a href="https://twitter.com/AlexShiresRoth" target="_blank" rel="noopener noreferer">
						<TiSocialTwitterCircular />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
