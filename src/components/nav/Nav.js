import React, { useEffect, useState } from 'react';
import navStyles from './Nav.module.scss';
import { connect } from 'react-redux';

const Nav = ({ refs: { refs, active } }) => {
  const [isMobile, setMobile] = useState(false);

  const setResize = e =>
    window.addEventListener('resize', e => setMobile(window.innerWidth <= 700));

  useEffect(() => {
    setResize();
  }, [setResize]);

  const scrollToSections = ref => {
    window.scrollTo({
      top: ref ? ref.current.offsetTop : 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const mobileMenu = (
    <svg viewBox="0 0 100 100" class="menu">
      <g>
        <path d="M 0 50 L100 50 Z" stroke-width="2px" stroke="#fff" />
        <path d="M 0, 30 L100, 30 Z" stroke-width="2px" stroke="#fff" />
        <path d="M 0, 70 L100, 70 Z" stroke-width="2px" stroke="#fff" />
      </g>
    </svg>
  );

  const navList = (
    <ul>
      <li
        onClick={() =>
          scrollToSections(refs.filter(ref => ref.current.id === 'services')[0])
        }
        className={active === 'services' ? navStyles.active : ''}
      >
        <a>Services</a>
      </li>
      <li
        onClick={() =>
          scrollToSections(refs.filter(ref => ref.current.id === 'work')[0])
        }
        className={active === 'work' ? navStyles.active : ''}
      >
        <a>Work</a>
      </li>
      <li
        onClick={() =>
          scrollToSections(refs.filter(ref => ref.current.id === 'contact')[0])
        }
        className={active === 'contact' ? navStyles.active : ''}
      >
        <a>Contact</a>
      </li>
    </ul>
  );

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.nav__left}>
        <a>AlexRoth productions</a>
      </div>
      {isMobile ? (
        <div className={navStyles.mobile_nav__right}>{mobileMenu}</div>
      ) : (
        <div className={navStyles.nav__right}>{navList}</div>
      )}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    refs: state.refs,
    active: state.active
  };
};

export default connect(mapStateToProps, null)(Nav);
