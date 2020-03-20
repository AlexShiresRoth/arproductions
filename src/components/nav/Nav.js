import React, { useEffect } from 'react';
import navStyles from './Nav.module.scss';
import { connect } from 'react-redux';

const Nav = ({ refs: { refs, active } }) => {
  const scrollToSections = ref => {
    window.scrollTo({
      top: ref ? ref.current.offsetTop : 0,
      left: 0,
      behavior: 'smooth'
    });
  };

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
      <div className={navStyles.nav__right}>{navList}</div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    refs: state.refs,
    active: state.active
  };
};

export default connect(mapStateToProps, null)(Nav);
