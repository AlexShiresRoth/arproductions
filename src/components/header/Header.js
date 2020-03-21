import React, { useEffect, useRef } from 'react';
import headerStyle from './Header.module.scss';
import { headerSvg } from './headerSvg';
import { setActive } from '../../actions/refs';
import { connect } from 'react-redux';
const Header = ({ refs: { refs }, setActive }) => {
  const borderSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill-opacity="1"
        d="M0,128L80,112C160,96,320,64,480,69.3C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
  );
  const borderBtm = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill-opacity="1"
        d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,165.3C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  );
  const scrollToSections = ref => {
    window.scrollTo({
      top: ref ? ref.current.offsetTop : 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const headerRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive('');
        }
      },
      { rootMargin: '0px 0px -200px 0px', threshold: 0.5 }
    );
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
  }, []);

  return (
    <header className={headerStyle.header} ref={headerRef}>
      <div className={headerStyle.text__box}>
        <div className={headerStyle.inner}>
          <h1>
            AlexRoth <br /> productions
          </h1>
          <p>Professional Web Development.</p>
          <div className={headerStyle.services}>
            <button
              onClick={() =>
                scrollToSections(
                  refs.filter(ref => ref.current.id === 'contact')[0]
                )
              }
            >
              Contact
            </button>
            <button
              onClick={() =>
                scrollToSections(
                  refs.filter(ref => ref.current.id === 'work')[0]
                )
              }
            >
              See Work
            </button>
          </div>
        </div>
      </div>

      <div className={headerStyle.svg__container}>
        {headerSvg}
        <div className={headerStyle.border__top}>{borderSvg}</div>
        <div className={headerStyle.border__btm}>{borderBtm}</div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    refs: state.refs
  };
};
export default connect(mapStateToProps, { setActive })(Header);
