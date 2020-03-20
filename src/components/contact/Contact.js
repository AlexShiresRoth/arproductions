import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import contactStyles from './Contact.module.scss';
import Form from './Form';
import About from './About';
import { addRef, setActive } from '../../actions/refs';
import { connect } from 'react-redux';

const Contact = ({ addRef, setActive }) => {
  const contactRef = useRef();

  useEffect(() => {
    addRef(contactRef);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(contactRef.current.id);
        }
      },
      { rootMargin: '0px 0px -200px 0px', threshold: 0.5 }
    );
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
  }, [addRef, contactRef]);

  return (
    <section className={contactStyles.section} id="contact" ref={contactRef}>
      <About />
      <Form />
    </section>
  );
};

Contact.propTypes = {
  addRef: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    refs: state.refs,
    active: state.active
  };
};

export default connect(mapStateToProps, { addRef, setActive })(Contact);
