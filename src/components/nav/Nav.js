import React from 'react';
import navStyles from './Nav.module.scss';

const Nav = props => {
  const navList = (
    <ul>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Work</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  );
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.nav__left}>
        <a>AlexRoth productions</a>
      </div>
      <div className={navStyles.nav__right}>{navList}</div>
    </nav>
  );
};

export default Nav;
