import React from "react";
import PropTypes from "prop-types";

const ServiceImgsSlide = ({ imgs, onClick, currentIndex }) => {
  return imgs
    .filter((img, i) => {
      return i !== currentIndex;
    })
    .map((img, i) => (
      <img src={img} alt={img} key={i} onClick={e => onClick(i)} />
    ));
};

ServiceImgsSlide.propTypes = {
  imgs: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired
};

export default ServiceImgsSlide;
