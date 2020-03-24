import React, { useState, useEffect, useRef } from 'react';
import serviceStyle from './Services.module.scss';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';
import { servicesArray } from './servicesArray';
import ServiceImgsSlide from './ServiceImgsSlide';

const Services = ({ addRef, setActive }) => {
  const serviceSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#380070"
        fill-opacity="1"
        d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,154.7C840,181,960,203,1080,186.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  );
  const [currentIndex, setIndex] = useState(0);

  const [transition, setTransition] = useState(false);
  const changeIndex = index => setIndex(index);

  const serviceRef = useRef();

  useEffect(() => {
    setTransition(true);

    addRef(serviceRef);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(entry);
          setActive(serviceRef.current.id);
        }
      },
      { rootMargin: '0px 0px -200px 0px', threshold: 0.5 }
    );
    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    setTimeout(() => {
      setTransition(false);
    }, 1000);

    return () => clearTimeout();
  }, [currentIndex, addRef, serviceRef, setActive]);

  const services = servicesArray.map((service, i) => {
    return (
      <div className={serviceStyle.grid}>
        <div className={serviceStyle.col}>
          <div
            className={serviceStyle.col_grid}
            style={i % 2 !== 0 ? { background: 'transparent' } : null}
          >
            <div
              className={serviceStyle.inner_left}
              style={i % 2 !== 0 ? { order: '1' } : { order: '0' }}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
            <div
              className={
                service.imgs !== null
                  ? serviceStyle.inner__img__grid
                  : serviceStyle.inner_right
              }
            >
              {service.imgs !== null ? (
                <>
                  <div class={serviceStyle.grid__inner}>
                    <img
                      src={service.imgs[currentIndex]}
                      alt="website layout"
                      className={transition ? serviceStyle.current_img : ''}
                      key={currentIndex}
                    />
                    <ServiceImgsSlide
                      imgs={service.imgs}
                      onClick={changeIndex}
                      currentIndex={currentIndex}
                      serviceStyle={serviceStyle}
                      transition={transition}
                    />
                  </div>
                  <div className={serviceStyle.currentindex__marker}>
                    {service.imgs.map((item, i) => (
                      <span
                        className={
                          currentIndex === i ? serviceStyle.active__span : null
                        }
                      ></span>
                    ))}
                  </div>
                </>
              ) : service.img !== null ? (
                service.img
              ) : (
                service.icons.map(icon => icon.icon)
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className={serviceStyle.section}>
      {serviceSvg}
      <div className={serviceStyle.heading} ref={serviceRef} id="services">
        <h2>Need a more impressive web presence?</h2>
      </div>
      {services}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    refs: state.refs
  };
};

export default connect(mapStateToProps, { addRef, setActive })(Services);
