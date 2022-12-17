import React from "react";
import PropTypes from "prop-types";

const Card = ({ className, children }) => (
  <section className={`card ${className}`}>{children}</section>
);

Card.defaultProps = {
  className: "",
  children: null
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Card;
