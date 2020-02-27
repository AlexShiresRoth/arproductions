import React, { useState } from "react";
import serviceStyle from "./Services.module.scss";
import { servicesArray } from "./servicesArray";
import ServiceImgsSlide from "./ServiceImgsSlide";

const Services = () => {
  const serviceSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#400082"
        fill-opacity="1"
        d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,154.7C840,181,960,203,1080,186.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  );
  const [currentIndex, setIndex] = useState(0);

  const changeIndex = index => setIndex(index);

  const services = servicesArray.map((service, i) => {
    return (
      <div className={serviceStyle.grid}>
        <div className={serviceStyle.col}>
          <div
            className={serviceStyle.col_grid}
            style={i % 2 !== 0 ? { background: "transparent" } : null}
          >
            <div
              className={serviceStyle.inner_left}
              style={i % 2 !== 0 ? { order: "1" } : { order: "0" }}
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
                <div class={serviceStyle.grid__inner}>
                  <img src={service.imgs[currentIndex]} alt="website" />
                  <ServiceImgsSlide
                    imgs={service.imgs}
                    onClick={changeIndex}
                    currentIndex={currentIndex}
                  />
                </div>
              ) : (
                service.img
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
      <div className={serviceStyle.heading}>
        <h2>Need a more impressive web presence?</h2>
      </div>
      {services}
    </section>
  );
};

export default Services;
